"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Episode, EPISODES } from "@/data/episodes";

interface AudioContextType {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isMuted: boolean;
  playEpisode: (episode: Episode, startAtSeconds?: number) => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  skip: (seconds: number) => void;
  setRate: (rate: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  playNext: () => void;
  playPrevious: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30); // Default to sample duration
  const [playbackRate, setPlaybackRateState] = useState<number>(1);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize standard HTML5 Audio
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const playEpisode = (episode: Episode, startAtSeconds: number = 0) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (currentEpisode?.id === episode.id) {
      if (startAtSeconds > 0) {
        audio.currentTime = startAtSeconds;
        setCurrentTime(startAtSeconds);
      }
      if (!isPlaying) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      return;
    }

    setCurrentEpisode(episode);
    audio.src = episode.audioUrl;
    audio.playbackRate = playbackRate;
    audio.volume = isMuted ? 0 : volume;

    audio.load();
    audio.oncanplay = () => {
      if (startAtSeconds > 0) {
        audio.currentTime = startAtSeconds;
      }
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Autoplay policy or audio error:", e);
      });
      audio.oncanplay = null;
    };
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (!currentEpisode && EPISODES.length > 0) {
      playEpisode(EPISODES[0]);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (!audio.src && currentEpisode) {
        audio.src = currentEpisode.audioUrl;
      }
      audio.play().then(() => setIsPlaying(true)).catch((e) => {
        console.warn("Play blocked:", e);
      });
    }
  };

  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    const nextTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const setRate = (rate: number) => {
    setPlaybackRateState(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
    if (vol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const playNext = () => {
    if (!currentEpisode) return;
    const currentIndex = EPISODES.findIndex((ep) => ep.id === currentEpisode.id);
    const nextIndex = (currentIndex + 1) % EPISODES.length;
    playEpisode(EPISODES[nextIndex]);
  };

  const playPrevious = () => {
    if (!currentEpisode) return;
    const currentIndex = EPISODES.findIndex((ep) => ep.id === currentEpisode.id);
    const prevIndex = (currentIndex - 1 + EPISODES.length) % EPISODES.length;
    playEpisode(EPISODES[prevIndex]);
  };

  return (
    <AudioContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        volume,
        isMuted,
        playEpisode,
        togglePlay,
        seek,
        skip,
        setRate,
        setVolume,
        toggleMute,
        playNext,
        playPrevious
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

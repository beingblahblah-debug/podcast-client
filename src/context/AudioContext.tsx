"use client";

import React, { createContext, useContext } from "react";

// Audio playback feature permanently removed as requested
const AudioContext = createContext<any>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useAudio() {
  return {};
}

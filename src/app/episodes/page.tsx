"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Radio, ArrowUpDown, X } from "lucide-react";
import EpisodeCard from "@/components/EpisodeCard";
import { EPISODES, CATEGORIES, Episode } from "@/data/episodes";

export default function EpisodesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSeason, setSelectedSeason] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "duration">("newest");

  const filteredEpisodes = useMemo(() => {
    return EPISODES.filter((episode) => {
      // Category filter
      if (selectedCategory !== "All" && episode.category !== selectedCategory) {
        return false;
      }
      // Season filter
      if (selectedSeason !== "All" && episode.season.toString() !== selectedSeason) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchTitle = episode.title.toLowerCase().includes(query);
        const matchGuest = episode.guest.name.toLowerCase().includes(query) || episode.guest.company.toLowerCase().includes(query);
        const matchSubtitle = episode.subtitle.toLowerCase().includes(query);
        const matchCategory = episode.category.toLowerCase().includes(query);
        if (!matchTitle && !matchGuest && !matchSubtitle && !matchCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        return (a.rank || 99) - (b.rank || 99);
      }
      if (sortBy === "duration") {
        return b.durationSec - a.durationSec;
      }
      // default newest
      return b.number - a.number;
    });
  }, [searchQuery, selectedCategory, selectedSeason, sortBy]);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-amber-600" />
            <span>The Complete Archive</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-3">
            Explore All Episodes
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Search 250+ long-form conversations. Filter by mental frameworks, leadership, technology breakthroughs, and guest credentials.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm mb-10 space-y-5">
          
          {/* Search Input Row */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, guest name, or keyword (e.g., 'neuroscience', 'Julian Vance', 'ambition')..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort episodes"
                  className="px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-slate-900 cursor-pointer"
                >
                  <option value="newest">Latest Release First</option>
                  <option value="popular">Most Popular / Streamed</option>
                  <option value="duration">Longest Deep-Dive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filters Row: Categories & Seasons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white font-semibold shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Season Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
              <span className="font-semibold">Season:</span>
              {["All", "4", "3"].map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedSeason === season
                      ? "bg-amber-100 text-amber-900 font-bold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {season === "All" ? "All" : `S${season}`}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Results summary & count */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <span>
            Showing <strong>{filteredEpisodes.length}</strong> {filteredEpisodes.length === 1 ? "episode" : "episodes"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {(searchQuery || selectedCategory !== "All" || selectedSeason !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedSeason("All");
              }}
              className="text-amber-700 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Episodes Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} highlightRank={episode.isTop10} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <Radio className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No episodes matched your query</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
              Try adjusting your search terms or resetting category filters to browse the entire archive.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedSeason("All");
              }}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
            >
              View All Episodes
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

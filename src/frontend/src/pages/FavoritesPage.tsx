import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";
import { getCurrentUser, getFavorites, toggleFavorite } from "../store";
import type { FavoriteItem } from "../store";

const TYPE_LABELS: Record<string, { tr: string; en: string; icon: string }> = {
  story: { tr: "Hikaye", en: "Story", icon: "📖" },
  poem: { tr: "Şiir", en: "Poem", icon: "🎭" },
  experiment: { tr: "Deney", en: "Experiment", icon: "🔬" },
};

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const profile = getCurrentUser();
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() =>
    profile ? getFavorites(profile.studentNumber) : [],
  );
  const [filter, setFilter] = useState<"all" | "story" | "poem" | "experiment">(
    "all",
  );

  const filtered =
    filter === "all" ? favorites : favorites.filter((f) => f.type === filter);

  function handleRemove(item: FavoriteItem) {
    if (!profile) return;
    toggleFavorite(profile.studentNumber, {
      type: item.type,
      key: item.key,
      title: item.title,
      emoji: item.emoji,
    });
    setFavorites(getFavorites(profile.studentNumber));
  }

  const bg = isDark
    ? "min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900"
    : "min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100";

  const cardBg = isDark
    ? "bg-white/10 border border-white/20"
    : "bg-white/80 border border-pink-200";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-white/70" : "text-gray-600";

  return (
    <div className={bg}>
      <div className="max-w-2xl mx-auto p-4 pb-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pt-4">
          <button
            type="button"
            onClick={() => navigate({ to: "/home" })}
            className={`${isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"} text-2xl font-bold`}
          >
            ←
          </button>
          <div>
            <h1 className={`text-2xl font-black ${textPrimary}`}>
              {lang === "en" ? "⭐ My Favorites" : "⭐ Favorilerim"}
            </h1>
            <p className={`text-sm ${textSecondary}`}>
              {lang === "en"
                ? `${favorites.length} saved items`
                : `${favorites.length} kayıtlı içerik`}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(["all", "story", "poem", "experiment"] as const).map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filter === f
                  ? "bg-pink-500 text-white shadow"
                  : isDark
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-white/80 text-gray-700 hover:bg-white"
              }`}
            >
              {f === "all"
                ? lang === "en"
                  ? "All"
                  : "Tümü"
                : `${TYPE_LABELS[f].icon} ${lang === "en" ? TYPE_LABELS[f].en : TYPE_LABELS[f].tr}`}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className={`text-center py-16 ${textSecondary}`}>
            <div className="text-6xl mb-4">⭐</div>
            <p className="font-bold text-lg">
              {lang === "en" ? "No favorites yet" : "Henüz favori yok"}
            </p>
            <p className="text-sm mt-2">
              {lang === "en"
                ? "Tap the ⭐ icon on stories, poems, or experiments to save them here."
                : "Hikaye, şiir veya deney sayfalarındaki ⭐ ikonuna basarak buraya kaydedin."}
            </p>
          </div>
        )}

        {/* Items */}
        <div className="space-y-3">
          {filtered.map((item) => {
            const typeInfo = TYPE_LABELS[item.type];
            const savedDate = new Date(item.savedAt).toLocaleDateString(
              lang === "en" ? "en-US" : "tr-TR",
              { day: "numeric", month: "short" },
            );
            const routeMap: Record<string, string> = {
              story: "/stories",
              poem: "/poems",
              experiment: "/experiments",
            };
            return (
              <div
                key={item.id}
                className={`${cardBg} rounded-2xl p-4 flex items-center gap-3`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-black text-base ${textPrimary} truncate`}
                  >
                    {item.title}
                  </div>
                  <div className={`text-xs ${textSecondary}`}>
                    {typeInfo.icon} {lang === "en" ? typeInfo.en : typeInfo.tr}{" "}
                    · {savedDate}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => navigate({ to: routeMap[item.type] as any })}
                    className={`${isDark ? "bg-white/20 hover:bg-white/30 text-white" : "bg-pink-100 hover:bg-pink-200 text-pink-700"} text-xs font-bold px-3 py-2 rounded-xl transition-all`}
                  >
                    {lang === "en" ? "Go" : "Git"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(item)}
                    className={`${isDark ? "bg-red-500/30 hover:bg-red-500/50 text-red-300" : "bg-red-100 hover:bg-red-200 text-red-600"} text-xs font-bold px-3 py-2 rounded-xl transition-all`}
                    title={lang === "en" ? "Remove" : "Kaldır"}
                  >
                    🗑
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

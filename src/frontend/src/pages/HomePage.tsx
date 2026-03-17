import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getBadgeLevel, getCurrentUser } from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";

const sections = [
  {
    icon: "📚",
    title: "Günlük Quiz",
    desc: "Her gün yeni sorular!",
    path: "/quiz",
    gradient: "from-purple-500 to-pink-500",
    ocid: "home.quiz_card",
  },
  {
    icon: "🎮",
    title: "Mucit Gereçleri",
    desc: "4 eğlenceli oyun",
    path: "/games",
    gradient: "from-green-500 to-emerald-500",
    ocid: "home.games_card",
  },
  {
    icon: "🌍",
    title: "Genel Kültür",
    desc: "Keşfet ve öğren",
    path: "/culture",
    gradient: "from-blue-500 to-cyan-500",
    ocid: "home.culture_card",
  },
  {
    icon: "👤",
    title: "Profilim",
    desc: "Rozetler ve istatistikler",
    path: "/profile",
    gradient: "from-orange-500 to-amber-500",
    ocid: "home.profile_card",
  },
  {
    icon: "📖",
    title: "Hikayeler",
    desc: "Masallar ve hikayeler",
    path: "/stories",
    gradient: "from-rose-500 to-pink-500",
    ocid: "home.stories_card",
  },
  {
    icon: "🎭",
    title: "Şiirler",
    desc: "Ezber ve şiir",
    path: "/poems",
    gradient: "from-violet-500 to-purple-500",
    ocid: "home.poems_card",
  },
  {
    icon: "🔬",
    title: "Deneyler",
    desc: "Evde bilim",
    path: "/experiments",
    gradient: "from-green-500 to-teal-500",
    ocid: "home.experiments_card",
  },
  {
    icon: "🧩",
    title: "Bulmacalar",
    desc: "Mantık ve zeka",
    path: "/puzzles",
    gradient: "from-amber-500 to-orange-500",
    ocid: "home.puzzles_card",
  },
  {
    icon: "🗺️",
    title: "Türkiye Haritası",
    desc: "İller ve bölgeler",
    path: "/turkey-map",
    gradient: "from-red-500 to-red-700",
    ocid: "home.turkeymap_card",
  },
  {
    icon: "🎵",
    title: "Müzik & Sanat",
    desc: "Nota ve sanat",
    path: "/art-music",
    gradient: "from-indigo-500 to-blue-500",
    ocid: "home.artmusic_card",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(getCurrentUser());

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
  }, []);

  if (!profile) return null;

  const badge = getBadgeLevel(profile.totalPoints);
  const progress = Math.min(100, (profile.totalPoints / 1000) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-white/10 backdrop-blur px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{AVATARS[profile.avatarIndex]}</span>
          <div>
            <div className="text-white font-bold">{profile.username}</div>
            <div className="text-white/70 text-xs">
              {LEVEL_NAMES[profile.level]}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-bold">⭐ {profile.totalPoints}</div>
          <div className="text-white/70 text-xs">
            {BADGE_EMOJIS[badge - 1]} {BADGE_NAMES[badge - 1]}
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between text-white/70 text-xs mb-1">
          <span>Toplam İlerleme</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {sections.map((s) => (
          <button
            type="button"
            key={s.path}
            data-ocid={s.ocid}
            onClick={() => navigate({ to: s.path })}
            className={`bg-gradient-to-br ${s.gradient} rounded-3xl p-5 text-left shadow-xl hover:scale-105 transition-transform active:scale-95`}
          >
            <div className="text-5xl mb-2">{s.icon}</div>
            <div className="text-white font-black text-lg leading-tight">
              {s.title}
            </div>
            <div className="text-white/80 text-sm mt-1">{s.desc}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-6 pb-6 pt-2">
        <button
          type="button"
          data-ocid="home.parent_link"
          onClick={() => navigate({ to: "/parent" })}
          className="text-white/60 hover:text-white text-sm underline"
        >
          👨‍👩‍👧 Veli Paneli
        </button>
        <button
          type="button"
          data-ocid="home.admin_link"
          onClick={() => navigate({ to: "/admin" })}
          className="text-white/60 hover:text-white text-sm underline"
        >
          ⚙️ Admin
        </button>
      </div>
    </div>
  );
}

import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getAdminAuth,
  getAudioUrls,
  setAdminAuth,
  setAudioUrl,
} from "../store";
import { AUDIO_CATEGORIES } from "../types";

export default function AdminPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [authed, setAuthed] = useState(getAdminAuth());
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [urls, setUrls] = useState<Record<string, string>>(getAudioUrls());
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({});

  const login = () => {
    if (password === "king154") {
      setAdminAuth(true);
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const saveUrl = (key: string) => {
    const url = urlInputs[key]?.trim();
    if (!url) return;
    setAudioUrl(key, url);
    setUrls((prev) => ({ ...prev, [key]: url }));
    setUrlInputs((prev) => ({ ...prev, [key]: "" }));
  };

  const handleFile = (key: string, file: File) => {
    const url = URL.createObjectURL(file);
    setAudioUrl(key, url);
    setUrls((prev) => ({ ...prev, [key]: url }));
  };

  if (!authed)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white/10 rounded-3xl p-8 w-full max-w-xs">
          <div className="text-4xl text-center mb-4">⚙️</div>
          <h1 className="text-white font-black text-xl text-center mb-6">
            {t("admin_title")}
          </h1>
          <Input
            data-ocid="admin.password_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("admin_password_placeholder")}
            className="bg-white/10 border-white/20 text-white placeholder-white/40 mb-3"
            onKeyDown={(e) => e.key === "Enter" && login()}
          />
          {error && (
            <p
              data-ocid="admin.error_state"
              className="text-red-400 text-sm mb-3"
            >
              ❌ Yanlış şifre
            </p>
          )}
          <Button
            data-ocid="admin.login_button"
            onClick={login}
            className="w-full bg-white text-gray-800 font-bold"
          >
            {t("admin_login")}
          </Button>
          <button
            type="button"
            data-ocid="admin.back_link"
            onClick={() => navigate({ to: "/home" })}
            className="w-full text-white/50 text-sm mt-3 text-center block"
          >
            ← {t("back")}
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <div className="flex items-center justify-between mb-6">
        <Button
          data-ocid="admin.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white"
        >
          ← Geri
        </Button>
        <h1 className="text-white font-black">
          ⚙️ {t("admin_audio_management")}
        </h1>
        <button
          type="button"
          data-ocid="admin.logout_button"
          onClick={() => {
            setAdminAuth(false);
            setAuthed(false);
          }}
          className="text-white/50 text-sm"
        >
          Çıkış
        </button>
      </div>
      <div className="space-y-3">
        {AUDIO_CATEGORIES.map((cat, i) => (
          <div key={cat.key} className="bg-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-bold text-sm">
                {i + 1}. {cat.label}
              </span>
              {urls[cat.key] ? (
                <span className="text-green-400 text-xs">✅ Yüklendi</span>
              ) : (
                <span className="text-white/40 text-xs">Boş</span>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                data-ocid={`admin.audio_url_input.${i + 1}`}
                value={urlInputs[cat.key] || ""}
                onChange={(e) =>
                  setUrlInputs((prev) => ({
                    ...prev,
                    [cat.key]: e.target.value,
                  }))
                }
                placeholder="URL gir..."
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/30 text-xs h-8"
                onKeyDown={(e) => e.key === "Enter" && saveUrl(cat.key)}
              />
              <Button
                data-ocid={`admin.save_url_button.${i + 1}`}
                size="sm"
                onClick={() => saveUrl(cat.key)}
                className="bg-blue-500 text-white h-8 text-xs px-3"
              >
                Kaydet
              </Button>
              <label
                data-ocid={`admin.upload_button.${i + 1}`}
                className="cursor-pointer"
                htmlFor={`file-${cat.key}`}
              >
                <span className="bg-white/20 text-white text-xs px-3 py-2 rounded-md hover:bg-white/30 transition-colors">
                  📁
                </span>
                <input
                  id={`file-${cat.key}`}
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(cat.key, f);
                  }}
                />
              </label>
            </div>
            {urls[cat.key] && (
              // biome-ignore lint/a11y/useMediaCaption: audio preview without caption is acceptable
              <audio controls src={urls[cat.key]} className="w-full mt-2 h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

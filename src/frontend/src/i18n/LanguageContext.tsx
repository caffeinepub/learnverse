import { createContext, useContext, useEffect, useState } from "react";
import { type TranslationKey, translations } from "./translations";

export type LangCode =
  | "tr"
  | "en"
  | "zh"
  | "hi"
  | "es"
  | "fr"
  | "ar"
  | "bn"
  | "ru"
  | "pt";

export const LANGUAGES: {
  code: LangCode;
  name: string;
  flag: string;
  rtl?: boolean;
}[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

type LanguageContextType = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: TranslationKey) => string;
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "tr",
  setLang: () => {},
  t: (key) => translations.tr[key],
  isRtl: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    const stored = localStorage.getItem("learnverse_lang");
    return (stored as LangCode) || "tr";
  });

  const currentLang = LANGUAGES.find((l) => l.code === lang);
  const isRtl = currentLang?.rtl ?? false;

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const setLang = (newLang: LangCode) => {
    localStorage.setItem("learnverse_lang", newLang);
    setLangState(newLang);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang]?.[key] ?? translations.tr[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

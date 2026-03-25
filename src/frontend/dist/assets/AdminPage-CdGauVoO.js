import { u as useNavigate, a as useLanguage, r as reactExports, g as getAdminAuth, b as getAudioUrls, j as jsxRuntimeExports, I as Input, B as Button, s as setAdminAuth, A as AUDIO_CATEGORIES, c as setAudioUrl } from "./index-DKzO8o3N.js";
function AdminPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [authed, setAuthed] = reactExports.useState(getAdminAuth());
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState(false);
  const [urls, setUrls] = reactExports.useState(getAudioUrls());
  const [urlInputs, setUrlInputs] = reactExports.useState({});
  const login = () => {
    if (password === "king154") {
      setAdminAuth(true);
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  const saveUrl = (key) => {
    var _a;
    const url = (_a = urlInputs[key]) == null ? void 0 : _a.trim();
    if (!url) return;
    setAudioUrl(key, url);
    setUrls((prev) => ({ ...prev, [key]: url }));
    setUrlInputs((prev) => ({ ...prev, [key]: "" }));
  };
  const handleFile = (key, file) => {
    const url = URL.createObjectURL(file);
    setAudioUrl(key, url);
    setUrls((prev) => ({ ...prev, [key]: url }));
  };
  if (!authed)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-3xl p-8 w-full max-w-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl text-center mb-4", children: "⚙️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-black text-xl text-center mb-6", children: t("admin_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          "data-ocid": "admin.password_input",
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          placeholder: t("admin_password_placeholder"),
          className: "bg-white/10 border-white/20 text-white placeholder-white/40 mb-3",
          onKeyDown: (e) => e.key === "Enter" && login()
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          "data-ocid": "admin.error_state",
          className: "text-red-400 text-sm mb-3",
          children: "❌ Yanlış şifre"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "admin.login_button",
          onClick: login,
          className: "w-full bg-white text-gray-800 font-bold",
          children: t("admin_login")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "admin.back_link",
          onClick: () => navigate({ to: "/home" }),
          className: "w-full text-white/50 text-sm mt-3 text-center block",
          children: [
            "← ",
            t("back")
          ]
        }
      )
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "admin.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white",
          children: "← Geri"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-white font-black", children: [
        "⚙️ ",
        t("admin_audio_management")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "admin.logout_button",
          onClick: () => {
            setAdminAuth(false);
            setAuthed(false);
          },
          className: "text-white/50 text-sm",
          children: "Çıkış"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: AUDIO_CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-sm", children: [
          i + 1,
          ". ",
          cat.label
        ] }),
        urls[cat.key] ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-xs", children: "✅ Yüklendi" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-xs", children: "Boş" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": `admin.audio_url_input.${i + 1}`,
            value: urlInputs[cat.key] || "",
            onChange: (e) => setUrlInputs((prev) => ({
              ...prev,
              [cat.key]: e.target.value
            })),
            placeholder: "URL gir...",
            className: "flex-1 bg-white/10 border-white/20 text-white placeholder-white/30 text-xs h-8",
            onKeyDown: (e) => e.key === "Enter" && saveUrl(cat.key)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": `admin.save_url_button.${i + 1}`,
            size: "sm",
            onClick: () => saveUrl(cat.key),
            className: "bg-blue-500 text-white h-8 text-xs px-3",
            children: "Kaydet"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            "data-ocid": `admin.upload_button.${i + 1}`,
            className: "cursor-pointer",
            htmlFor: `file-${cat.key}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white text-xs px-3 py-2 rounded-md hover:bg-white/30 transition-colors", children: "📁" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `file-${cat.key}`,
                  type: "file",
                  accept: "audio/*",
                  className: "hidden",
                  onChange: (e) => {
                    var _a;
                    const f = (_a = e.target.files) == null ? void 0 : _a[0];
                    if (f) handleFile(cat.key, f);
                  }
                }
              )
            ]
          }
        )
      ] }),
      urls[cat.key] && // biome-ignore lint/a11y/useMediaCaption: audio preview without caption is acceptable
      /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: urls[cat.key], className: "w-full mt-2 h-8" })
    ] }, cat.key)) })
  ] });
}
export {
  AdminPage as default
};

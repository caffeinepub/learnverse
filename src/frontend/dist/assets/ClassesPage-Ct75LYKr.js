import { u as useNavigate, a as useLanguage, r as reactExports, h as getAssignmentsForClass, k as getProfileByStudentNumber, j as jsxRuntimeExports, B as Button, l as AVATARS, I as Input, L as LEVEL_NAMES, n as BADGE_EMOJIS, o as getBadgeLevel, p as deleteAssignment, q as getTeacherMessages, v as saveTeacherMessage, w as createAssignment } from "./index-BMS1Ic9U.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNA1_lkk.js";
import { T as Textarea } from "./textarea-34Jg6XhA.js";
import "./index-NtoA_Ia3.js";
function getClasses() {
  try {
    const keys = Object.keys(localStorage).filter(
      (k) => k.startsWith("learnverse_class_")
    );
    const result = {};
    for (const key of keys) {
      const classKey = key.replace("learnverse_class_", "");
      result[classKey] = JSON.parse(localStorage.getItem(key) || "{}");
    }
    return result;
  } catch {
    return {};
  }
}
function saveClass(classKey, data) {
  localStorage.setItem(`learnverse_class_${classKey}`, JSON.stringify(data));
}
function deleteClass(classKey) {
  localStorage.removeItem(`learnverse_class_${classKey}`);
}
const SECTION_OPTIONS = [
  { value: "quiz", label: "📚 Günlük Quiz" },
  { value: "stories", label: "📖 Hikayeler" },
  { value: "poems", label: "🎭 Şiirler" },
  { value: "experiments", label: "🔬 Deneyler" },
  { value: "puzzles", label: "🧩 Bulmacalar" },
  { value: "math-practice", label: "🔢 Matematik" },
  { value: "vocabulary", label: "📖 Kelime Haznesi" },
  { value: "grammar", label: "📝 Dilbilgisi" },
  { value: "science", label: "🦬 Fen Bilimleri" },
  { value: "history", label: "🏗️ Tarih" },
  { value: "geography", label: "🗺️ Coğrafya" },
  { value: "english", label: "🇬🇧 İngilizce" },
  { value: "coding", label: "💻 Kodlama" },
  { value: "health", label: "💪 Sağlık" }
];
function ClassesPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [classes, setClasses] = reactExports.useState(getClasses);
  const [selectedClass, setSelectedClass] = reactExports.useState(null);
  const [newName, setNewName] = reactExports.useState("");
  const [newPin, setNewPin] = reactExports.useState("");
  const [addStudentNum, setAddStudentNum] = reactExports.useState("");
  const [addError, setAddError] = reactExports.useState("");
  const [createError, setCreateError] = reactExports.useState("");
  const [msgStudentNum, setMsgStudentNum] = reactExports.useState("");
  const [msgText, setMsgText] = reactExports.useState("");
  const [msgSent, setMsgSent] = reactExports.useState(false);
  const [msgHistory, setMsgHistory] = reactExports.useState([]);
  const [asgnTitle, setAsgnTitle] = reactExports.useState("");
  const [asgnDesc, setAsgnDesc] = reactExports.useState("");
  const [asgnSection, setAsgnSection] = reactExports.useState("quiz");
  const [asgnDue, setAsgnDue] = reactExports.useState("");
  const [asgnClassKey, setAsgnClassKey] = reactExports.useState(null);
  const [assignments, setAssignments] = reactExports.useState(
    () => asgnClassKey ? getAssignmentsForClass(asgnClassKey) : []
  );
  const [asgnError, setAsgnError] = reactExports.useState("");
  const [asgnSuccess, setAsgnSuccess] = reactExports.useState(false);
  const refresh = () => setClasses(getClasses());
  const refreshAssignments = (classKey) => {
    setAssignments(getAssignmentsForClass(classKey));
  };
  const createClass = () => {
    if (!newName.trim()) {
      setCreateError("Sınıf adı boş olamaz.");
      return;
    }
    if (!/^\d{4}$/.test(newPin)) {
      setCreateError("PIN 4 haneli olmalı.");
      return;
    }
    const classKey = `${newName.trim()}_${newPin}`;
    saveClass(classKey, {
      name: newName.trim(),
      pin: newPin,
      studentNumbers: []
    });
    setNewName("");
    setNewPin("");
    setCreateError("");
    refresh();
  };
  const addStudentToClass = () => {
    if (!selectedClass) return;
    const num = addStudentNum.replace(/\s/g, "");
    if (num.length !== 16) {
      setAddError("16 haneli numara giriniz.");
      return;
    }
    const cls = classes[selectedClass];
    if (cls.studentNumbers.includes(num)) {
      setAddError("Bu öğrenci zaten eklendi.");
      return;
    }
    const updated = { ...cls, studentNumbers: [...cls.studentNumbers, num] };
    saveClass(selectedClass, updated);
    setAddStudentNum("");
    setAddError("");
    refresh();
  };
  const removeStudent = (classKey, num) => {
    const cls = classes[classKey];
    const updated = {
      ...cls,
      studentNumbers: cls.studentNumbers.filter((n) => n !== num)
    };
    saveClass(classKey, updated);
    refresh();
  };
  const handleCreateAssignment = () => {
    if (!asgnClassKey) return;
    if (!asgnTitle.trim()) {
      setAsgnError("Ödev başlığı boş olamaz.");
      return;
    }
    if (!asgnDue) {
      setAsgnError("Son teslim tarihi seçiniz.");
      return;
    }
    createAssignment({
      classKey: asgnClassKey,
      title: asgnTitle.trim(),
      description: asgnDesc.trim(),
      section: asgnSection,
      dueDate: asgnDue
    });
    setAsgnTitle("");
    setAsgnDesc("");
    setAsgnDue("");
    setAsgnError("");
    setAsgnSuccess(true);
    setTimeout(() => setAsgnSuccess(false), 2e3);
    refreshAssignments(asgnClassKey);
  };
  const classList = Object.entries(classes);
  const selectedClassData = selectedClass ? classes[selectedClass] : null;
  const selectedStudents = selectedClassData ? selectedClassData.studentNumbers.map((num) => getProfileByStudentNumber(num)).filter(Boolean) : [];
  const avgPoints = selectedStudents.length > 0 ? Math.round(
    selectedStudents.reduce((s, p) => s + p.totalPoints, 0) / selectedStudents.length
  ) : 0;
  const topStudent = selectedStudents.reduce(
    (top, p) => !top || p.totalPoints > top.totalPoints ? p : top,
    null
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "classes.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/parent" }),
        className: "text-white mb-4",
        children: "← Geri"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black text-white mb-1", children: [
      "🏫 ",
      t("classes_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-6", children: "Öğrenci gruplarını ve ödevleri yönetin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "siniflarim", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full bg-white/10 rounded-2xl p-1 mb-4 grid grid-cols-4 h-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "siniflarim",
            "data-ocid": "classes.tab",
            className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs",
            children: "Sınıflarım"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "odevler",
            "data-ocid": "classes.tab",
            className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs",
            children: "📋 Ödevler"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "mesajlasma",
            "data-ocid": "classes.tab",
            className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
            children: "💬 Mesaj"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "yeni",
            "data-ocid": "classes.tab",
            className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs",
            children: "+ Yeni Sınıf"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "siniflarim", children: classList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "classes.empty_state",
          className: "bg-white/10 rounded-2xl p-8 text-center text-white/60",
          children: 'Henüz sınıf oluşturmadınız. "Yeni Sınıf" sekmesinden ekleyin.'
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: classList.map(([key, cls], idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `classes.item.${idx + 1}`,
          className: "bg-white/10 rounded-2xl p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg", children: cls.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/50 text-xs", children: [
                  "PIN: ",
                  cls.pin,
                  " • ",
                  cls.studentNumbers.length,
                  " öğrenci"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": `classes.edit_button.${idx + 1}`,
                    size: "sm",
                    onClick: () => setSelectedClass(selectedClass === key ? null : key),
                    className: "bg-white/20 text-white hover:bg-white/30 text-xs",
                    children: selectedClass === key ? "Kapat" : "Aç"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": `classes.delete_button.${idx + 1}`,
                    size: "sm",
                    onClick: () => {
                      deleteClass(key);
                      if (selectedClass === key) setSelectedClass(null);
                      refresh();
                    },
                    className: "bg-red-500/30 text-red-300 hover:bg-red-500/50 text-xs",
                    children: "Sil"
                  }
                )
              ] })
            ] }),
            selectedClass === key && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3", children: [
              selectedStudents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-2 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: selectedStudents.length }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "Öğrenci" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-2 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: avgPoints }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "Ort. Puan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-2 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl", children: topStudent ? AVATARS[topStudent.avatarIndex] : "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "En İyi" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "classes.input",
                    value: addStudentNum,
                    onChange: (e) => setAddStudentNum(e.target.value),
                    placeholder: "16 haneli öğrenci no...",
                    className: "flex-1 bg-white/10 border-white/20 text-white placeholder-white/40 text-sm",
                    onKeyDown: (e) => e.key === "Enter" && addStudentToClass()
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "classes.primary_button",
                    onClick: addStudentToClass,
                    className: "bg-green-500 hover:bg-green-600 text-white text-xs",
                    children: "Ekle"
                  }
                )
              ] }),
              addError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": "classes.error_state",
                  className: "text-red-400 text-xs",
                  children: addError
                }
              ),
              cls.studentNumbers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-sm text-center py-2", children: "Henüz öğrenci eklenmedi." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: cls.studentNumbers.map((num, si) => {
                const p = getProfileByStudentNumber(num);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `classes.row.${si + 1}`,
                    className: "flex items-center gap-3 bg-white/10 rounded-xl p-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: p ? AVATARS[p.avatarIndex] : "👤" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm truncate", children: p ? p.username : `${num.slice(0, 8)}...` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs", children: p ? `${LEVEL_NAMES[p.level]} • ${p.totalPoints} puan` : "Yerel veri yok" })
                      ] }),
                      p && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: BADGE_EMOJIS[getBadgeLevel(p.totalPoints) - 1] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": `classes.delete_button.${si + 1}`,
                          size: "sm",
                          onClick: () => removeStudent(key, num),
                          className: "bg-red-500/20 text-red-300 hover:bg-red-500/40 text-xs px-2",
                          children: "✕"
                        }
                      )
                    ]
                  },
                  num
                );
              }) })
            ] })
          ]
        },
        key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "odevler", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: classList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "classes.empty_state",
          className: "bg-white/10 rounded-2xl p-8 text-center text-white/60",
          children: "Önce bir sınıf oluşturun, sonra ödev atayabilirsiniz."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm font-bold mb-3", children: "Sınıf Seç:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: classList.map(([key, cls]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setAsgnClassKey(key);
                refreshAssignments(key);
              },
              className: `px-3 py-1.5 rounded-xl text-sm font-bold transition-all ${asgnClassKey === key ? "bg-blue-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`,
              children: [
                "🏫 ",
                cls.name
              ]
            },
            key
          )) })
        ] }),
        asgnClassKey && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-black text-base", children: "+ Yeni Ödev Ata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs mb-1 block", children: "Ödev Başlığı" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "classes.input",
                  value: asgnTitle,
                  onChange: (e) => setAsgnTitle(e.target.value),
                  placeholder: "Ör: Bu haftanın hikayesini oku",
                  className: "bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs mb-1 block", children: "Açıklama (isteğe bağlı)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "classes.input",
                  value: asgnDesc,
                  onChange: (e) => setAsgnDesc(e.target.value),
                  placeholder: "Öğrencilere ek bilgi...",
                  className: "bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs mb-1 block", children: "Bölüm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: asgnSection,
                  onChange: (e) => setAsgnSection(e.target.value),
                  className: "w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm",
                  children: SECTION_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "option",
                    {
                      value: opt.value,
                      className: "bg-slate-800",
                      children: opt.label
                    },
                    opt.value
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs mb-1 block", children: "Son Teslim Tarihi" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "classes.input",
                  type: "date",
                  value: asgnDue,
                  onChange: (e) => setAsgnDue(e.target.value),
                  className: "bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                }
              )
            ] }),
            asgnError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "classes.error_state",
                className: "text-red-400 text-xs",
                children: asgnError
              }
            ),
            asgnSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "classes.success_state",
                className: "text-green-400 text-xs font-bold",
                children: "✅ Ödev başarıyla atandı!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "classes.submit_button",
                onClick: handleCreateAssignment,
                className: "w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 rounded-xl",
                children: "📋 Ödevi Ata"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-sm font-bold", children: [
              "Mevcut Ödevler (",
              assignments.length,
              ")"
            ] }),
            assignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 rounded-2xl p-4 text-center text-white/50 text-sm", children: "Henüz ödev atanmadı." }) : assignments.map((asgn, ai) => {
              var _a;
              const sectionLabel = ((_a = SECTION_OPTIONS.find(
                (s) => s.value === asgn.section
              )) == null ? void 0 : _a.label) || asgn.section;
              const classData = asgnClassKey ? classes[asgnClassKey] : null;
              const totalStudents = (classData == null ? void 0 : classData.studentNumbers.length) || 0;
              const completedCount = asgn.completedBy.length;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": `classes.row.${ai + 1}`,
                  className: "bg-white/10 rounded-2xl p-4",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-sm", children: asgn.title }),
                      asgn.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs mt-0.5", children: asgn.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-300", children: sectionLabel }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300", children: [
                          "Son teslim:",
                          " ",
                          new Date(
                            asgn.dueDate
                          ).toLocaleDateString("tr-TR")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/60 mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tamamlayan" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            completedCount,
                            "/",
                            totalStudents
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full bg-green-500 rounded-full",
                            style: {
                              width: totalStudents > 0 ? `${completedCount / totalStudents * 100}%` : "0%"
                            }
                          }
                        ) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": `classes.delete_button.${ai + 1}`,
                        size: "sm",
                        onClick: () => {
                          deleteAssignment(asgn.id);
                          refreshAssignments(asgnClassKey);
                        },
                        className: "ml-2 bg-red-500/20 text-red-300 hover:bg-red-500/40 text-xs px-2",
                        children: "Sil"
                      }
                    )
                  ] })
                },
                asgn.id
              );
            })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "mesajlasma", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3", children: "📩 Veliye Mesaj Gönder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "classes.search_input",
                value: msgStudentNum,
                onChange: (e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                  setMsgStudentNum(v);
                  if (v.length === 16) setMsgHistory(getTeacherMessages(v));
                  else setMsgHistory([]);
                },
                placeholder: "16 haneli öğrenci numarası",
                className: "bg-white/10 border-white/20 text-white placeholder-white/40",
                maxLength: 16
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": "classes.textarea",
                value: msgText,
                onChange: (e) => setMsgText(e.target.value.slice(0, 500)),
                placeholder: "Veli için mesajınızı yazın...",
                className: "bg-white/10 border-white/20 text-white placeholder-white/40 resize-none",
                rows: 3
              }
            ),
            msgSent && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "classes.success_state",
                className: "text-green-400 text-sm font-bold",
                children: "✅ Mesaj iletildi!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "classes.submit_button",
                disabled: !msgText.trim() || msgStudentNum.length !== 16,
                onClick: () => {
                  saveTeacherMessage({
                    studentNumber: msgStudentNum,
                    from: "Öğretmen",
                    fromRole: "teacher",
                    message: msgText.trim()
                  });
                  setMsgText("");
                  setMsgSent(true);
                  setMsgHistory(getTeacherMessages(msgStudentNum));
                  setTimeout(() => setMsgSent(false), 3e3);
                },
                className: "w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-xl disabled:opacity-40",
                children: "Gönder 📨"
              }
            )
          ] })
        ] }),
        msgHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3", children: "Konuşma Geçmişi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: [...msgHistory].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          ).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl p-3 flex gap-2 items-start ${m.fromRole === "teacher" ? "bg-blue-500/20 border border-blue-400/30" : "bg-green-500/20 border border-green-400/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${m.fromRole === "teacher" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`,
                    children: m.fromRole === "teacher" ? "Öğretmen" : "Veli"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm", children: m.message }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-xs mt-1", children: new Date(m.date).toLocaleString("tr-TR") })
                ] })
              ]
            },
            m.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "yeni", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-black text-lg", children: "Yeni Sınıf Oluştur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "class-name",
              className: "text-white/70 text-sm mb-1 block",
              children: "Sınıf Adı"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "class-name",
              "data-ocid": "classes.input",
              value: newName,
              onChange: (e) => setNewName(e.target.value),
              placeholder: "Ör: 4-A Sınıfı",
              className: "bg-white/10 border-white/20 text-white placeholder-white/40"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "class-pin",
              className: "text-white/70 text-sm mb-1 block",
              children: "4 Haneli PIN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "class-pin",
              "data-ocid": "classes.input",
              value: newPin,
              onChange: (e) => setNewPin(e.target.value.replace(/\D/g, "").slice(0, 4)),
              placeholder: "1234",
              className: "bg-white/10 border-white/20 text-white placeholder-white/40",
              maxLength: 4
            }
          )
        ] }),
        createError && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": "classes.error_state",
            className: "text-red-400 text-sm",
            children: createError
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "classes.submit_button",
            onClick: createClass,
            className: "w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-xl",
            children: "🏫 Sınıf Oluştur"
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  ClassesPage as default
};

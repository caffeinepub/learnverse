import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../i18n/LanguageContext";
import {
  createAssignment,
  deleteAssignment,
  getAssignmentsForClass,
  getBadgeLevel,
  getProfileByStudentNumber,
} from "../store";
import type { Assignment } from "../store";
import { AVATARS, BADGE_EMOJIS, LEVEL_NAMES } from "../types";
import type { Profile } from "../types";

type ClassData = {
  name: string;
  pin: string;
  studentNumbers: string[];
};

function getClasses(): Record<string, ClassData> {
  try {
    const keys = Object.keys(localStorage).filter((k) =>
      k.startsWith("learnverse_class_"),
    );
    const result: Record<string, ClassData> = {};
    for (const key of keys) {
      const classKey = key.replace("learnverse_class_", "");
      result[classKey] = JSON.parse(localStorage.getItem(key) || "{}");
    }
    return result;
  } catch {
    return {};
  }
}

function saveClass(classKey: string, data: ClassData): void {
  localStorage.setItem(`learnverse_class_${classKey}`, JSON.stringify(data));
}

function deleteClass(classKey: string): void {
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
  { value: "health", label: "💪 Sağlık" },
];

export default function ClassesPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [classes, setClasses] = useState<Record<string, ClassData>>(getClasses);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newPin, setNewPin] = useState("");
  const [addStudentNum, setAddStudentNum] = useState("");
  const [addError, setAddError] = useState("");
  const [createError, setCreateError] = useState("");

  // Assignment form state
  const [asgnTitle, setAsgnTitle] = useState("");
  const [asgnDesc, setAsgnDesc] = useState("");
  const [asgnSection, setAsgnSection] = useState("quiz");
  const [asgnDue, setAsgnDue] = useState("");
  const [asgnClassKey, setAsgnClassKey] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Assignment[]>(() =>
    asgnClassKey ? getAssignmentsForClass(asgnClassKey) : [],
  );
  const [asgnError, setAsgnError] = useState("");
  const [asgnSuccess, setAsgnSuccess] = useState(false);

  const refresh = () => setClasses(getClasses());

  const refreshAssignments = (classKey: string) => {
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
      studentNumbers: [],
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

  const removeStudent = (classKey: string, num: string) => {
    const cls = classes[classKey];
    const updated = {
      ...cls,
      studentNumbers: cls.studentNumbers.filter((n) => n !== num),
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
      dueDate: asgnDue,
    });
    setAsgnTitle("");
    setAsgnDesc("");
    setAsgnDue("");
    setAsgnError("");
    setAsgnSuccess(true);
    setTimeout(() => setAsgnSuccess(false), 2000);
    refreshAssignments(asgnClassKey);
  };

  const classList = Object.entries(classes);

  const selectedClassData = selectedClass ? classes[selectedClass] : null;
  const selectedStudents: Profile[] = selectedClassData
    ? (selectedClassData.studentNumbers
        .map((num) => getProfileByStudentNumber(num))
        .filter(Boolean) as Profile[])
    : [];

  const avgPoints =
    selectedStudents.length > 0
      ? Math.round(
          selectedStudents.reduce((s, p) => s + p.totalPoints, 0) /
            selectedStudents.length,
        )
      : 0;
  const topStudent = selectedStudents.reduce<Profile | null>(
    (top, p) => (!top || p.totalPoints > top.totalPoints ? p : top),
    null,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-4">
      <Button
        data-ocid="classes.back_button"
        variant="ghost"
        onClick={() => navigate({ to: "/parent" })}
        className="text-white mb-4"
      >
        ← Geri
      </Button>
      <h1 className="text-2xl font-black text-white mb-1">
        🏫 {t("classes_title")}
      </h1>
      <p className="text-white/60 text-sm mb-6">
        Öğrenci gruplarını ve ödevleri yönetin
      </p>

      <Tabs defaultValue="siniflarim" className="w-full">
        <TabsList className="w-full bg-white/10 rounded-2xl p-1 mb-4 grid grid-cols-3 h-auto">
          <TabsTrigger
            value="siniflarim"
            data-ocid="classes.tab"
            className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs"
          >
            Sınıflarım
          </TabsTrigger>
          <TabsTrigger
            value="odevler"
            data-ocid="classes.tab"
            className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs"
          >
            📋 Ödevler
          </TabsTrigger>
          <TabsTrigger
            value="yeni"
            data-ocid="classes.tab"
            className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl py-2 font-bold text-xs"
          >
            + Yeni Sınıf
          </TabsTrigger>
        </TabsList>

        <TabsContent value="siniflarim">
          {classList.length === 0 ? (
            <div
              data-ocid="classes.empty_state"
              className="bg-white/10 rounded-2xl p-8 text-center text-white/60"
            >
              Henüz sınıf oluşturmadınız. "Yeni Sınıf" sekmesinden ekleyin.
            </div>
          ) : (
            <div className="space-y-3">
              {classList.map(([key, cls], idx) => (
                <div
                  key={key}
                  data-ocid={`classes.item.${idx + 1}`}
                  className="bg-white/10 rounded-2xl p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-white font-black text-lg">
                        {cls.name}
                      </div>
                      <div className="text-white/50 text-xs">
                        PIN: {cls.pin} • {cls.studentNumbers.length} öğrenci
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        data-ocid={`classes.edit_button.${idx + 1}`}
                        size="sm"
                        onClick={() =>
                          setSelectedClass(selectedClass === key ? null : key)
                        }
                        className="bg-white/20 text-white hover:bg-white/30 text-xs"
                      >
                        {selectedClass === key ? "Kapat" : "Aç"}
                      </Button>
                      <Button
                        data-ocid={`classes.delete_button.${idx + 1}`}
                        size="sm"
                        onClick={() => {
                          deleteClass(key);
                          if (selectedClass === key) setSelectedClass(null);
                          refresh();
                        }}
                        className="bg-red-500/30 text-red-300 hover:bg-red-500/50 text-xs"
                      >
                        Sil
                      </Button>
                    </div>
                  </div>

                  {selectedClass === key && (
                    <div className="mt-3 space-y-3">
                      {/* Stats */}
                      {selectedStudents.length > 0 && (
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white/10 rounded-xl p-2 text-center">
                            <div className="text-white font-black">
                              {selectedStudents.length}
                            </div>
                            <div className="text-white/60 text-xs">Öğrenci</div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-2 text-center">
                            <div className="text-white font-black">
                              {avgPoints}
                            </div>
                            <div className="text-white/60 text-xs">
                              Ort. Puan
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-2 text-center">
                            <div className="text-xl">
                              {topStudent
                                ? AVATARS[topStudent.avatarIndex]
                                : "—"}
                            </div>
                            <div className="text-white/60 text-xs">En İyi</div>
                          </div>
                        </div>
                      )}

                      {/* Add student */}
                      <div className="flex gap-2">
                        <Input
                          data-ocid="classes.input"
                          value={addStudentNum}
                          onChange={(e) => setAddStudentNum(e.target.value)}
                          placeholder="16 haneli öğrenci no..."
                          className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                          onKeyDown={(e) =>
                            e.key === "Enter" && addStudentToClass()
                          }
                        />
                        <Button
                          data-ocid="classes.primary_button"
                          onClick={addStudentToClass}
                          className="bg-green-500 hover:bg-green-600 text-white text-xs"
                        >
                          Ekle
                        </Button>
                      </div>
                      {addError && (
                        <div
                          data-ocid="classes.error_state"
                          className="text-red-400 text-xs"
                        >
                          {addError}
                        </div>
                      )}

                      {/* Students list */}
                      {cls.studentNumbers.length === 0 ? (
                        <div className="text-white/50 text-sm text-center py-2">
                          Henüz öğrenci eklenmedi.
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {cls.studentNumbers.map((num, si) => {
                            const p = getProfileByStudentNumber(num);
                            return (
                              <div
                                key={num}
                                data-ocid={`classes.row.${si + 1}`}
                                className="flex items-center gap-3 bg-white/10 rounded-xl p-2"
                              >
                                <span className="text-2xl">
                                  {p ? AVATARS[p.avatarIndex] : "👤"}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="text-white font-bold text-sm truncate">
                                    {p ? p.username : `${num.slice(0, 8)}...`}
                                  </div>
                                  <div className="text-white/50 text-xs">
                                    {p
                                      ? `${LEVEL_NAMES[p.level]} • ${p.totalPoints} puan`
                                      : "Yerel veri yok"}
                                  </div>
                                </div>
                                {p && (
                                  <span className="text-lg">
                                    {
                                      BADGE_EMOJIS[
                                        getBadgeLevel(p.totalPoints) - 1
                                      ]
                                    }
                                  </span>
                                )}
                                <Button
                                  data-ocid={`classes.delete_button.${si + 1}`}
                                  size="sm"
                                  onClick={() => removeStudent(key, num)}
                                  className="bg-red-500/20 text-red-300 hover:bg-red-500/40 text-xs px-2"
                                >
                                  ✕
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Assignments Tab */}
        <TabsContent value="odevler">
          <div className="space-y-4">
            {classList.length === 0 ? (
              <div
                data-ocid="classes.empty_state"
                className="bg-white/10 rounded-2xl p-8 text-center text-white/60"
              >
                Önce bir sınıf oluşturun, sonra ödev atayabilirsiniz.
              </div>
            ) : (
              <>
                {/* Select class for assignments */}
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-white/70 text-sm font-bold mb-3">
                    Sınıf Seç:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {classList.map(([key, cls]) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => {
                          setAsgnClassKey(key);
                          refreshAssignments(key);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-sm font-bold transition-all ${
                          asgnClassKey === key
                            ? "bg-blue-500 text-white"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        🏫 {cls.name}
                      </button>
                    ))}
                  </div>
                </div>

                {asgnClassKey && (
                  <>
                    {/* Create assignment form */}
                    <div className="bg-white/10 rounded-2xl p-4 space-y-3">
                      <h3 className="text-white font-black text-base">
                        + Yeni Ödev Ata
                      </h3>

                      <div>
                        <span className="text-white/60 text-xs mb-1 block">
                          Ödev Başlığı
                        </span>
                        <Input
                          data-ocid="classes.input"
                          value={asgnTitle}
                          onChange={(e) => setAsgnTitle(e.target.value)}
                          placeholder="Ör: Bu haftanın hikayesini oku"
                          className="bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                        />
                      </div>

                      <div>
                        <span className="text-white/60 text-xs mb-1 block">
                          Açıklama (isteğe bağlı)
                        </span>
                        <Input
                          data-ocid="classes.input"
                          value={asgnDesc}
                          onChange={(e) => setAsgnDesc(e.target.value)}
                          placeholder="Öğrencilere ek bilgi..."
                          className="bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                        />
                      </div>

                      <div>
                        <span className="text-white/60 text-xs mb-1 block">
                          Bölüm
                        </span>
                        <select
                          value={asgnSection}
                          onChange={(e) => setAsgnSection(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm"
                        >
                          {SECTION_OPTIONS.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              className="bg-slate-800"
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <span className="text-white/60 text-xs mb-1 block">
                          Son Teslim Tarihi
                        </span>
                        <Input
                          data-ocid="classes.input"
                          type="date"
                          value={asgnDue}
                          onChange={(e) => setAsgnDue(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/40 text-sm"
                        />
                      </div>

                      {asgnError && (
                        <div
                          data-ocid="classes.error_state"
                          className="text-red-400 text-xs"
                        >
                          {asgnError}
                        </div>
                      )}
                      {asgnSuccess && (
                        <div
                          data-ocid="classes.success_state"
                          className="text-green-400 text-xs font-bold"
                        >
                          ✅ Ödev başarıyla atandı!
                        </div>
                      )}

                      <Button
                        data-ocid="classes.submit_button"
                        onClick={handleCreateAssignment}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 rounded-xl"
                      >
                        📋 Ödevi Ata
                      </Button>
                    </div>

                    {/* Existing assignments */}
                    <div className="space-y-2">
                      <div className="text-white/70 text-sm font-bold">
                        Mevcut Ödevler ({assignments.length})
                      </div>
                      {assignments.length === 0 ? (
                        <div className="bg-white/10 rounded-2xl p-4 text-center text-white/50 text-sm">
                          Henüz ödev atanmadı.
                        </div>
                      ) : (
                        assignments.map((asgn, ai) => {
                          const sectionLabel =
                            SECTION_OPTIONS.find(
                              (s) => s.value === asgn.section,
                            )?.label || asgn.section;
                          const classData = asgnClassKey
                            ? classes[asgnClassKey]
                            : null;
                          const totalStudents =
                            classData?.studentNumbers.length || 0;
                          const completedCount = asgn.completedBy.length;
                          return (
                            <div
                              key={asgn.id}
                              data-ocid={`classes.row.${ai + 1}`}
                              className="bg-white/10 rounded-2xl p-4"
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1 min-w-0">
                                  <div className="text-white font-black text-sm">
                                    {asgn.title}
                                  </div>
                                  {asgn.description && (
                                    <div className="text-white/60 text-xs mt-0.5">
                                      {asgn.description}
                                    </div>
                                  )}
                                  <div className="flex items-center gap-3 mt-2 text-xs">
                                    <span className="text-cyan-300">
                                      {sectionLabel}
                                    </span>
                                    <span className="text-white/40">•</span>
                                    <span className="text-yellow-300">
                                      Son teslim:{" "}
                                      {new Date(
                                        asgn.dueDate,
                                      ).toLocaleDateString("tr-TR")}
                                    </span>
                                  </div>
                                  <div className="mt-2">
                                    <div className="flex justify-between text-xs text-white/60 mb-1">
                                      <span>Tamamlayan</span>
                                      <span>
                                        {completedCount}/{totalStudents}
                                      </span>
                                    </div>
                                    <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                                      <div
                                        className="h-full bg-green-500 rounded-full"
                                        style={{
                                          width:
                                            totalStudents > 0
                                              ? `${(completedCount / totalStudents) * 100}%`
                                              : "0%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  data-ocid={`classes.delete_button.${ai + 1}`}
                                  size="sm"
                                  onClick={() => {
                                    deleteAssignment(asgn.id);
                                    refreshAssignments(asgnClassKey!);
                                  }}
                                  className="ml-2 bg-red-500/20 text-red-300 hover:bg-red-500/40 text-xs px-2"
                                >
                                  Sil
                                </Button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="yeni">
          <div className="bg-white/10 rounded-2xl p-5 space-y-4">
            <h2 className="text-white font-black text-lg">
              Yeni Sınıf Oluştur
            </h2>
            <div>
              <label
                htmlFor="class-name"
                className="text-white/70 text-sm mb-1 block"
              >
                Sınıf Adı
              </label>
              <Input
                id="class-name"
                data-ocid="classes.input"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Ör: 4-A Sınıfı"
                className="bg-white/10 border-white/20 text-white placeholder-white/40"
              />
            </div>
            <div>
              <label
                htmlFor="class-pin"
                className="text-white/70 text-sm mb-1 block"
              >
                4 Haneli PIN
              </label>
              <Input
                id="class-pin"
                data-ocid="classes.input"
                value={newPin}
                onChange={(e) =>
                  setNewPin(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                placeholder="1234"
                className="bg-white/10 border-white/20 text-white placeholder-white/40"
                maxLength={4}
              />
            </div>
            {createError && (
              <div
                data-ocid="classes.error_state"
                className="text-red-400 text-sm"
              >
                {createError}
              </div>
            )}
            <Button
              data-ocid="classes.submit_button"
              onClick={createClass}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-xl"
            >
              🏫 Sınıf Oluştur
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

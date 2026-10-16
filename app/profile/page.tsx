"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type StudentProfile = {
  name: string;
  age: number;
};

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<StudentProfile>({
    name: "",
    age: 0,
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("loyal-profile");
      if (saved) {
        const data = JSON.parse(saved);
        setProfile({
          name: String(data.name || ""),
          age: Number(data.age) || 0,
        });
        setName(String(data.name || ""));
        setAge(String(data.age || ""));
      }
    } catch {
      setMessage("Profile load nahi ho paya.");
    }
    setReady(true);
  }, []);

  function saveProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanName = name.trim();
    const numericAge = Number(age);

    if (!cleanName || !Number.isFinite(numericAge) ||
        numericAge < 5 || numericAge > 100) {
      setMessage("Sahi naam aur age enter karein.");
      return;
    }

    const updated = { name: cleanName, age: numericAge };

    try {
      localStorage.setItem("loyal-profile", JSON.stringify(updated));
      setProfile(updated);
      setEditing(false);
      setMessage("Profile successfully save ho gayi!");
    } catch {
      setMessage("Save nahi hua. Dobara try karein.");
    }
  }

  function logout() {
    localStorage.removeItem("loyal-profile");
    router.replace("/login");
  }

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b16] text-cyan-300">
        Profile load ho rahi hai...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070b16] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-lg font-black tracking-wide">
            <span className="text-cyan-400">LOYAL</span> GLOBAL STUDIES
          </a>
          <a href="/" className="text-sm text-slate-300 hover:text-cyan-300">
            ← Home
          </a>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#10223c] via-[#0b1425] to-[#101025] p-6 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">
            STUDENT DASHBOARD
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            My <span className="text-cyan-300">Profile</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Apni student details manage karein aur LOYAL Global Studies ke
            saath apni learning journey aage badhayein.
          </p>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-300/30 bg-cyan-400/10 text-4xl font-black text-cyan-300 shadow-lg">
              {profile.name ? profile.name.charAt(0).toUpperCase() : "S"}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {profile.name || "Student"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                LOYAL Global Studies Learner
              </p>
              <span className="mt-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                Student Profile
              </span>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-[#0b1120] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Personal Information</h2>
              <p className="mt-1 text-sm text-slate-400">
                Apni details yahan update karein.
              </p>
            </div>
            {!editing && (
              <button
                onClick={() => {
                  setName(profile.name);
                  setAge(profile.age ? String(profile.age) : "");
                  setEditing(true);
                  setMessage("");
                }}
                className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-200 hover:bg-cyan-300/20"
              >
                Edit Profile ✎
              </button>
            )}
          </div>

          {editing ? (
            <form onSubmit={saveProfile} className="mt-6 space-y-5">
              <div>
                <label htmlFor="student-name" className="mb-2 block text-sm font-semibold text-slate-300">
                  Student Name
                </label>
                <input
                  id="student-name"
                  required
                  maxLength={60}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#070b16] px-4 py-3 outline-none focus:border-cyan-400"
                  placeholder="Apna naam likhein"
                />
              </div>

              <div>
                <label htmlFor="student-age" className="mb-2 block text-sm font-semibold text-slate-300">
                  Age
                </label>
                <input
                  id="student-age"
                  type="number"
                  required
                  min={5}
                  max={100}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#070b16] px-4 py-3 outline-none focus:border-cyan-400"
                  placeholder="Apni age likhein"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditing(false);
                    setMessage("");
                  }}
                  className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/5"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Full Name
                </p>
                <p className="mt-2 break-words text-lg font-bold">
                  {profile.name || "Not set"}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Age
                </p>
                <p className="mt-2 text-lg font-bold">
                  {profile.age || "Not set"}
                </p>
              </div>
            </div>
          )}

          {message && (
            <p aria-live="polite" className="mt-4 text-sm text-cyan-300">
              {message}
            </p>
          )}
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-[#0b1120] p-6 sm:p-8">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="/courses" className="rounded-xl border border-white/10 p-4 hover:border-cyan-300/40">
              <span className="font-bold">📚 Courses</span>
              <p className="mt-1 text-sm text-slate-400">Apne courses dekhein</p>
            </a>
            <a href="/mock-tests" className="rounded-xl border border-white/10 p-4 hover:border-cyan-300/40">
              <span className="font-bold">📝 Mock Tests</span>
              <p className="mt-1 text-sm text-slate-400">Practice tests explore karein</p>
            </a>
          </div>
        </section>

        <button
          onClick={logout}
          className="mt-6 rounded-xl border border-red-400/25 px-5 py-3 text-sm font-bold text-red-300 hover:bg-red-400/10"
        >
          Exit Profile
        </button>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Profile details is browser mein save hoti hain. Yeh verified account
          authentication ya secure logout nahi hai.
        </p>
      </div>
    </main>
  );
}

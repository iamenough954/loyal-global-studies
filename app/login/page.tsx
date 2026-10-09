"use client";

import { useEffect, useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("loyal-profile");
      if (saved) setSavedName(JSON.parse(saved).name || "");
    } catch {}
  }, []);

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !age || Number(age) < 5 || Number(age) > 100) return;

    try {
      const saved = localStorage.getItem("loyal-profile");
      if (saved) {
        setSavedName(JSON.parse(saved).name || "");
        return;
      }
      const profile = { name: name.trim(), age: Number(age) };
      localStorage.setItem("loyal-profile", JSON.stringify(profile));
      setSavedName(profile.name);
    } catch {
      alert("Registration save nahi ho paya. Dobara try karein.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b16] px-5 py-10 text-white">
      <section className="w-full max-w-md rounded-3xl border border-cyan-400/25 bg-[#0b1120] p-7 shadow-2xl sm:p-9">
        <a href="/" className="text-xl font-black tracking-wide">
          <span className="text-cyan-400">LOYAL</span> GLOBAL STUDIES
        </a>
        <p className="mt-8 text-sm font-bold tracking-widest text-cyan-300">WELCOME LEARNER</p>
        <h1 className="mt-3 text-3xl font-black">अपनी पढ़ाई शुरू करें</h1>
        {savedName ? (
          <div className="mt-7 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
            <p className="text-slate-300">स्वागत है,</p>
            <p className="mt-2 text-2xl font-black text-cyan-300">{savedName}</p>
            <p className="mt-3 text-sm text-slate-300">आपका profile इस browser में save है।</p>
            <a href="/" className="mt-5 inline-block rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Continue →</a>
          </div>
        ) : (
          <form onSubmit={register} className="mt-7 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold">आपका नाम</label>
              <input id="name" required maxLength={60} value={name}
                onChange={e => setName(e.target.value)}
                placeholder="अपना नाम लिखें"
                className="w-full rounded-xl border border-white/15 bg-[#070b16] px-4 py-4 outline-none focus:border-cyan-400" />
            </div>
            <div>
              <label htmlFor="age" className="mb-2 block text-sm font-bold">आपकी उम्र</label>
              <input id="age" required type="number" min="5" max="100" value={age}
                onChange={e => setAge(e.target.value)}
                placeholder="उम्र लिखें"
                className="w-full rounded-xl border border-white/15 bg-[#070b16] px-4 py-4 outline-none focus:border-cyan-400" />
            </div>
            <button className="w-full rounded-xl bg-cyan-400 px-5 py-4 font-black text-slate-950 hover:bg-cyan-300">
              Continue →
            </button>
          </form>
        )}
        <p className="mt-5 text-xs leading-5 text-slate-500">
          नाम और उम्र इसी browser में save होते हैं। यह अभी verified account या पक्की device-level login restriction नहीं है।
        </p>
        <a href="/" className="mt-6 inline-block text-sm text-cyan-300">← Home</a>
      </section>
    </main>
  );
}

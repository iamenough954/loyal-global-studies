"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");

    const { data, error: loginError } =
      await supabase.auth.signInWithPassword({ email, password });

    if (loginError || !data.user) {
      setError("Login nahi hua. Email aur password check karein.");
      setBusy(false);
      return;
    }

    const { data: admin, error: adminError } =
      await supabase.rpc("is_loyal_admin");

    if (adminError || admin !== true) {
      await supabase.auth.signOut();
      setError("Is account ko Admin access nahi mila hai.");
      setBusy(false);
      return;
    }

    router.replace("/admin/lectures");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030b19] px-5 text-white">
      <form onSubmit={login} className="w-full max-w-md space-y-5 rounded-3xl border border-cyan-400/30 bg-[#0a1729] p-7">
        <a href="/" className="font-bold text-cyan-300">← LOYAL GLOBAL STUDIES</a>
        <p className="pt-4 text-sm font-bold tracking-widest text-cyan-300">ADMIN STUDIO</p>
        <h1 className="text-3xl font-black">Admin Login</h1>
        <label className="block text-sm">
          Email
          <input required type="email" autoComplete="username" value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#030b19] p-3" />
        </label>
        <label className="block text-sm">
          Password
          <input required type="password" autoComplete="current-password" value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#030b19] p-3" />
        </label>
        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        <button disabled={busy} className="w-full rounded-xl bg-cyan-300 p-3 font-black text-slate-950 disabled:opacity-50">
          {busy ? "Checking..." : "Login as Admin"}
        </button>
      </form>
    </main>
  );
}

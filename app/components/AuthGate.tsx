"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (pathname === "/login") {
      setLoggedIn(true);
      setChecked(true);
      return;
    }

    let validProfile = false;

    try {
      const saved = localStorage.getItem("loyal-profile");
      if (saved) {
        const profile = JSON.parse(saved);
        validProfile =
          typeof profile.name === "string" &&
          profile.name.trim().length > 0 &&
          Number.isFinite(Number(profile.age));
      }
    } catch {
      validProfile = false;
    }

    setLoggedIn(validProfile);
    setChecked(true);

    if (!validProfile) {
      router.replace("/login");
    }
  }, [pathname, router]);

  if (pathname === "/login") {
    return <>{children}</>;
  }

  if (!checked || !loggedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030b19] px-5 text-center text-white">
        <div>
          <p className="text-2xl font-black text-cyan-300">
            LOYAL GLOBAL STUDIES
          </p>
          <p className="mt-3 text-slate-400">
            Login check ho raha hai...
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}

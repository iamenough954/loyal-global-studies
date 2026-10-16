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

const isAdminRoute = pathname.startsWith("/admin");
const isLoginPage = pathname === "/login";
const canBypassProfileGate = isLoginPage || isAdminRoute;

useEffect(() => {
if (canBypassProfileGate) {
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

}, [pathname, router, canBypassProfileGate]);

if (canBypassProfileGate) {
return <>{children}</>;
}

if (!checked || !loggedIn) {
return (
<main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
<div className="text-center">
<div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
<p className="text-sm text-slate-300">
LOYAL Global Studies लोड हो रहा है...
</p>
</div>
</main>
);
}

return <>{children}</>;
}

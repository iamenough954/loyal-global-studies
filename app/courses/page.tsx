const courses = [
  {
    title: "Hindi Foundation",
    teacher: "Jitendra Soni Sir",
    description: "Hindi Foundation की classes और lecture series।",
    href: "/hindi-foundation",
    icon: "📚",
    label: "HINDI",
  },
  {
    title: "Math by Dhruv Sir",
    teacher: "Dhruv Sir",
    description: "UPSC और अन्य प्रतियोगी परीक्षाओं के लिए गणित की classes।",
    href: "/math-by-dhruv",
    icon: "∑",
    label: "MATHEMATICS",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#030b19] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="font-bold text-cyan-300">← LOYAL GLOBAL STUDIES</a>

        <p className="mt-8 text-sm font-bold tracking-[0.25em] text-cyan-300">
          LEARN WITH LOYAL
        </p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          All <span className="text-cyan-300">Courses</span>
        </h1>
        <p className="mt-4 text-slate-400">
          अपनी पसंद का course चुनें और अपनी तैयारी जारी रखें।
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <a
              key={course.href}
              href={course.href}
              className="group rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-[#0a1d35] to-[#061020] p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-300">
                  {course.icon}
                </span>
                <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-bold tracking-wider text-cyan-300">
                  {course.label}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-black group-hover:text-cyan-300">
                {course.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">By {course.teacher}</p>
              <p className="mt-4 leading-7 text-slate-300">{course.description}</p>
              <div className="mt-6 font-bold text-cyan-300">Open Course →</div>
            </a>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 LOYAL Global Studies
          <p className="mt-2 font-bold">
            <span className="loyal-rainbow">DEVELOPER BY ❤️ LOYAL JI ❤️</span>
          </p>
        </footer>
      </div>
    </main>
  );
}

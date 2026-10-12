"use client";

import { useEffect, useState } from "react";
import rawData from "../../../data/uppcs_test1_questions_raw.json";
import solutionData from "../../../data/uppcs_test1_solution_data.json";

type Question = {
  id: number;
  rawText: string;
  detectedOptions: string[];
};

type Solution = {
  id: number;
  solutionAnswer: string;
  solution?: string;
};

type SolutionFile = {
  questions: Solution[];
};

const questions = rawData as Question[];
const solutions = (solutionData as SolutionFile).questions;
const solutionMap = new Map(solutions.map((s) => [s.id, s]));
const letters = ["A", "B", "C", "D"];

function getStem(text: string) {
  return text.split(/\n(?=\(a\)\s)/i)[0] || text;
}

function getOptionText(text: string) {
  return text.replace(/^\([a-d]\)\s*/i, "").trim();
}

export default function UppcsTestOnePage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [marked, setMarked] = useState<Record<number, boolean>>({});
  const [seconds, setSeconds] = useState(120 * 60);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setSeconds((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const question = questions[current];
  const correct = questions.filter(
    (q) => answers[q.id] === solutionMap.get(q.id)?.solutionAnswer
  ).length;
  const attempted = Object.keys(answers).length;
  const wrong = attempted - correct;
  const skipped = questions.length - attempted;
  const score = correct - wrong / 3;

  const time = `${String(Math.floor(seconds / 3600)).padStart(2, "0")}:${String(
    Math.floor((seconds % 3600) / 60)
  ).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  if (!question) {
    return <main className="min-h-screen bg-slate-950 p-8 text-white">प्रश्न उपलब्ध नहीं हैं।</main>;
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#070b14] p-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <a href="/mock-tests" className="font-bold text-cyan-300">
            ← Mock Tests
          </a>
          <span className="font-bold">UPPCS Prelims — Test 1</span>
          <span className={`rounded-lg px-3 py-2 font-mono font-bold ${seconds < 300 ? "bg-red-500/20 text-red-300" : "bg-cyan-400/10 text-cyan-200"}`}>
            ⏱ {time}
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 p-4 py-6 md:grid-cols-[1fr_280px]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          {!submitted ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-400">
                  प्रश्न {current + 1} / {questions.length}
                </p>
                <button
                  onClick={() =>
                    setMarked((old) => ({ ...old, [question.id]: !old[question.id] }))
                  }
                  className={`rounded-lg border px-3 py-2 text-sm ${marked[question.id] ? "border-amber-300 text-amber-200" : "border-white/20 text-slate-300"}`}
                >
                  {marked[question.id] ? "★ Review हटाएँ" : "☆ Mark for Review"}
                </button>
              </div>

              <h1 className="mt-6 whitespace-pre-line text-lg font-semibold leading-8 sm:text-xl">
                {getStem(question.rawText)}
              </h1>

              <div className="mt-6 grid gap-3">
                {question.detectedOptions.map((option, index) => {
                  const letter = letters[index];
                  const selected = answers[question.id] === letter;

                  return (
                    <button
                      key={`${question.id}-${index}`}
                      onClick={() =>
                        setAnswers((old) => ({ ...old, [question.id]: letter }))
                      }
                      className={`rounded-xl border p-4 text-left leading-7 transition ${
                        selected
                          ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                          : "border-white/10 bg-black/20 hover:border-white/30"
                      }`}
                    >
                      <span className="mr-3 font-bold">{letter}.</span>
                      {getOptionText(option)}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap justify-between gap-3">
                <button
                  disabled={current === 0}
                  onClick={() => setCurrent((n) => n - 1)}
                  className="rounded-xl border border-white/20 px-5 py-3 disabled:opacity-40"
                >
                  ← पिछला प्रश्न
                </button>
                {current < questions.length - 1 && (
                  <button
                    onClick={() => setCurrent((n) => n + 1)}
                    className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
                  >
                    अगला प्रश्न →
                  </button>
                )}
              </div>

              <p className="mt-5 text-sm text-slate-400">
                सही उत्तर: +1 अंक · गलत उत्तर: −⅓ अंक · छोड़ा गया प्रश्न: 0 अंक
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-black text-cyan-300">परीक्षा का परिणाम</h1>
              <p className="mt-2 text-slate-300">UPPCS Prelims — Test 1</p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["कुल अंक", score.toFixed(2)],
                  ["सही", String(correct)],
                  ["गलत", String(wrong)],
                  ["छोड़े", String(skipped)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-black">{value}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-8 text-xl font-bold">उत्तर समीक्षा</h2>
              <div className="mt-4 space-y-4">
                {questions.map((q) => {
                  const solution = solutionMap.get(q.id);
                  const chosen = answers[q.id];
                  const answer = solution?.solutionAnswer?.toUpperCase();

                  return (
                    <article key={q.id} className="rounded-xl border border-white/10 p-4">
                      <p className="font-bold">प्रश्न {q.id}</p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-300">
                        {getStem(q.rawText)}
                      </p>
                      <p className="mt-3 text-sm">
                        आपका उत्तर: <b>{chosen || "नहीं दिया"}</b>
                        {" · "}
                        सही उत्तर: <b className="text-emerald-300">{answer || "उपलब्ध नहीं"}</b>
                      </p>
                      {solution?.solution && (
                        <details className="mt-3">
                          <summary className="cursor-pointer text-cyan-300">व्याख्या देखें</summary>
                          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-300">
                            {solution.solution}
                          </p>
                        </details>
                      )}
                    </article>
                  );
                })}
              </div>

              <button
                onClick={() => window.location.reload()}
                className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
              >
                नया प्रयास शुरू करें
              </button>
            </>
          )}
        </section>

        {!submitted && (
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-bold">प्रश्न सूची</h2>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {questions.map((q, index) => {
                const answered = Boolean(answers[q.id]);
                const review = Boolean(marked[q.id]);

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrent(index)}
                    className={`rounded-lg border p-2 text-sm font-bold ${
                      index === current
                        ? "border-cyan-300 bg-cyan-400/20"
                        : review
                        ? "border-amber-300 bg-amber-400/10"
                        : answered
                        ? "border-emerald-400/60 bg-emerald-400/10"
                        : "border-white/10"
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <p>उत्तर दिए: {attempted}</p>
              <p>Review के लिए चिह्नित: {Object.values(marked).filter(Boolean).length}</p>
              <p>बाकी प्रश्न: {questions.length - attempted}</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm("क्या आप परीक्षा जमा करना चाहते हैं? इसके बाद उत्तर नहीं बदल सकेंगे।")) {
                  setSubmitted(true);
                }
              }}
              className="mt-6 w-full rounded-xl bg-emerald-400 px-4 py-3 font-black text-slate-950"
            >
              परीक्षा Submit करें
            </button>
          </aside>
        )}
      </div>
    </main>
  );
}

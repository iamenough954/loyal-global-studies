"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const petSampleQuestions: Question[] = [
  {
    id: 1,
    question: "भारत में शासन करने वाले दिए गए राजाओं का सही कालानुक्रमिक क्रम क्या है?\n(1) शेरशाह सूरी\n(2) अकबर\n(3) अलाउद्दीन खिलजी\n(4) इल्तुतमिश",
    options: [
      { key: "a", text: "4, 1, 3, 2" },
      { key: "b", text: "4, 3, 1, 2" },
      { key: "c", text: "1, 2, 3, 4" },
      { key: "d", text: "3, 4, 1, 2" }
    ],
    correctAnswer: "b",
    explanation: "सही कालानुक्रमिक क्रम इस प्रकार है:\n1. इल्तुतमिश (1211–1236 ई.)\n2. अलाउद्दीन खिलजी (1296–1316 ई.)\n3. शेरशाह सूरी (1540–1545 ई.)\n4. अकबर (1556–1605 ई.)\nअतः सही कूट 4, 3, 1, 2 है।"
  },
  {
    id: 2,
    question: "निम्न में से कौन से संत शिवाजी के समकालीन थे?",
    options: [
      { key: "a", text: "तुकाराम" },
      { key: "b", text: "चैतन्य" },
      { key: "c", text: "नामदेव" },
      { key: "d", text: "शंकराचार्य" }
    ],
    correctAnswer: "a",
    explanation: "संत तुकाराम (1598-1650 ई.) मराठा शासक छत्रपति शिवाजी महाराज के समकालीन थे।"
  },
  {
    id: 3,
    question: "बंगाल के प्रथम गवर्नर जनरल कौन थे?",
    options: [
      { key: "a", text: "लॉर्ड क्लाइव" },
      { key: "b", text: "लॉर्ड वारेन हेस्टिंग्स" },
      { key: "c", text: "लॉर्ड लिप्टन" },
      { key: "d", text: "लॉर्ड रिपन" }
    ],
    correctAnswer: "b",
    explanation: "1773 के रेगुलेटिंग एक्ट के तहत लॉर्ड वारेन हेस्टिंग्स को बंगाल का प्रथम गवर्नर-जनरल बनाया गया था।"
  },
  {
    id: 4,
    question: "चरक सहिंता संबंधित है:",
    options: [
      { key: "a", text: "राजनीति" },
      { key: "b", text: "चिकित्सा" },
      { key: "c", text: "वास्तुकला" },
      { key: "d", text: "गणित" }
    ],
    correctAnswer: "b",
    explanation: "चरक संहिता आयुर्वेद और चिकित्सा का एक प्रसिद्ध प्राचीन भारतीय ग्रंथ है, जिसकी रचना महर्षि चरक ने की थी।"
  },
  {
    id: 5,
    question: "काजीरंगा राष्ट्रीय उद्यान स्थित है:",
    options: [
      { key: "a", text: "मध्य प्रदेश" },
      { key: "b", text: "असम" },
      { key: "c", text: "पश्चिम बंगाल" },
      { key: "d", text: "केरल" }
    ],
    correctAnswer: "b",
    explanation: "काजीरंगा राष्ट्रीय उद्यान असम राज्य में स्थित है, जो एक सींग वाले गेंडे के लिए विश्व प्रसिद्ध है।"
  }
];

export default function PetExamEnginePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(7200);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    petSampleQuestions.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns) {
        if (userAns === q.correctAnswer) correct++;
        else incorrect++;
      }
    });
    const marks = correct * 1.0 - incorrect * 0.25;
    return { correct, incorrect, unattempted: petSampleQuestions.length - (correct + incorrect), score: marks.toFixed(2) };
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const q = petSampleQuestions[currentIdx];
  const results = calculateScore();

  return (
    <main className="min-h-screen bg-[#070b16] text-white selection:bg-cyan-500/30 pb-12">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b16]/90 backdrop-blur-xl px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/mock-tests/upsssc-pet" className="text-xs font-bold text-cyan-300 hover:text-white sm:text-sm">
            ← Exit Test
          </Link>
          <div className="text-center">
            <h1 className="text-sm font-black tracking-wider sm:text-lg">UPSSSC PET Paper</h1>
            <p className="text-[10px] text-slate-400 sm:text-xs">Official Pattern Engine</p>
          </div>
          {!isSubmitted ? (
            <div className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-black text-cyan-200 sm:text-sm">
              ⏱ {formatTime(timeLeft)}
            </div>
          ) : (
            <span className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-black text-emerald-300">
              Completed
            </span>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-8">
        {!isSubmitted ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e172a] to-[#080d19] p-6 sm:p-8 shadow-2xl">
              <span className="rounded-lg bg-cyan-400/20 px-3 py-1 text-xs font-black text-cyan-300">
                Question {currentIdx + 1} of {petSampleQuestions.length}
              </span>

              <div className="mt-6 text-base sm:text-lg font-semibold text-slate-100 whitespace-pre-line">
                {q.question}
              </div>

              <div className="mt-8 space-y-3">
                {q.options.map((opt) => {
                  const isSelected = userAnswers[q.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: opt.key }))}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-400/20 text-white font-bold"
                          : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-400/40"
                      }`}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs ${isSelected ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-300"}`}>
                        {opt.key.toUpperCase()}
                      </span>
                      <span className="text-sm sm:text-base">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => prev - 1)}
                  className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold text-slate-300 disabled:opacity-30"
                >
                  ← Previous
                </button>
                {currentIdx < petSampleQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => prev + 1)}
                    className="rounded-xl bg-cyan-400 px-6 py-2.5 text-xs font-black text-slate-950"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-2.5 text-xs font-black text-slate-950"
                  >
                    Submit Test ✦
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 shadow-xl h-fit">
              <h3 className="font-black text-sm tracking-wider text-cyan-300 uppercase">Question Palette</h3>
              <div className="mt-4 grid grid-cols-4 gap-2.5">
                {petSampleQuestions.map((quest, i) => (
                  <button
                    key={quest.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`flex h-11 items-center justify-center rounded-xl border text-xs font-bold transition ${
                      currentIdx === i
                        ? "border-cyan-400 bg-cyan-400 text-slate-950"
                        : userAnswers[quest.id]
                        ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                        : "border-white/10 bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsSubmitted(true)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-xs font-black text-slate-950"
              >
                Submit Exam
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 p-6 sm:p-10 shadow-2xl">
              <h2 className="text-3xl font-black sm:text-5xl">UPSSSC PET Score Summary</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Correct</p>
                  <p className="mt-2 text-3xl font-black text-emerald-400">{results.correct}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Incorrect</p>
                  <p className="mt-2 text-3xl font-black text-rose-400">{results.incorrect}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-slate-400">Unattempted</p>
                  <p className="mt-2 text-3xl font-black text-slate-400">{results.unattempted}</p>
                </div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <p className="text-xs text-cyan-300">Marks (-0.25 Neg)</p>
                  <p className="mt-2 text-3xl font-black text-cyan-200">{results.score}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-black text-cyan-300">Detailed Explanations (उत्तर व्याख्या)</h3>
              <div className="mt-6 space-y-6">
                {petSampleQuestions.map((item, idx) => {
                  const userAns = userAnswers[item.id];
                  const isCorrect = userAns === item.correctAnswer;
                  return (
                    <article key={item.id} className="rounded-3xl border border-white/10 bg-[#0d1424] p-6 sm:p-8">
                      <p className="font-black text-sm text-cyan-300">Question {idx + 1}</p>
                      <p className="mt-2 font-semibold whitespace-pre-line">{item.question}</p>
                      <div className="mt-4 flex gap-4 text-sm font-bold">
                        <span className="text-slate-400">Your Answer: {userAns ? userAns.toUpperCase() : "None"}</span>
                        <span className="text-emerald-400">Correct: {item.correctAnswer.toUpperCase()}</span>
                      </div>
                      <div className="mt-4 rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06] p-5">
                        <p className="text-xs font-black text-cyan-300 uppercase">💡 Vyaakhya / Explanation:</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-200 whitespace-pre-line">{item.explanation}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

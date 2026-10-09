"use client";

import { useState } from "react";

const questions = [
  { q: "12 × 8 = ?", options: ["86", "96", "92", "108"], answer: "96" },
  { q: "144 का वर्गमूल क्या है?", options: ["10", "11", "12", "14"], answer: "12" },
  { q: "25% of 200 = ?", options: ["25", "40", "50", "75"], answer: "50" },
  { q: "15 + 27 = ?", options: ["40", "41", "42", "43"], answer: "42" },
  { q: "9² = ?", options: ["18", "72", "81", "99"], answer: "81" },
  { q: "एक दर्जन में कितनी वस्तुएँ होती हैं?", options: ["10", "12", "15", "20"], answer: "12" },
  { q: "1000 ÷ 25 = ?", options: ["20", "25", "40", "50"], answer: "40" },
  { q: "7 × 7 = ?", options: ["42", "48", "49", "56"], answer: "49" },
  { q: "3/4 का प्रतिशत क्या है?", options: ["25%", "50%", "75%", "80%"], answer: "75%" },
  { q: "सबसे छोटी अभाज्य संख्या कौन-सी है?", options: ["0", "1", "2", "3"], answer: "2" },
];

export default function MathQuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState("");
  const [finished, setFinished] = useState(false);

  function next() {
    const newScore = score + (chosen === questions[index].answer ? 1 : 0);
    setScore(newScore);
    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setChosen("");
    }
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setChosen("");
    setFinished(false);
  }

  const question = questions[index];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b16] px-5 py-10 text-white">
      <section className="w-full max-w-xl rounded-3xl border border-cyan-400/25 bg-[#0b1120] p-6 sm:p-9">
        <a href="/" className="text-sm font-bold text-cyan-300">← LOYAL GLOBAL STUDIES</a>
        <p className="mt-7 text-sm font-bold tracking-widest text-cyan-300">PLAY · THINK · LEARN</p>
        <h1 className="mt-3 text-3xl font-black">🧠 Math Quiz Game</h1>
        {finished ? (
          <div className="mt-8 text-center">
            <p className="text-5xl">🏆</p>
            <h2 className="mt-4 text-2xl font-black">Quiz Complete!</h2>
            <p className="mt-3 text-lg text-slate-300">आपका score: <strong className="text-cyan-300">{score}/{questions.length}</strong></p>
            <button onClick={restart} className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950">Play Again</button>
          </div>
        ) : (
          <>
            <div className="mt-7 flex justify-between text-sm text-slate-400">
              <span>Question {index + 1} / {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-400" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
            </div>
            <h2 className="mt-8 text-2xl font-bold">{question.q}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {question.options.map(option => (
                <button key={option} onClick={() => setChosen(option)}
                  className={`rounded-xl border p-4 text-left font-bold transition ${chosen === option ? "border-cyan-300 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/[0.03] hover:border-cyan-400/50"}`}>
                  {option}
                </button>
              ))}
            </div>
            <button disabled={!chosen} onClick={next}
              className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-4 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">
              {index === questions.length - 1 ? "Finish Quiz" : "Next Question →"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}

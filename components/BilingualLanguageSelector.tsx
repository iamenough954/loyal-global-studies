"use client";

import type { TestLanguage } from "@/lib/bilingual-test";

type Props = {
  value: TestLanguage;
  onChange: (language: TestLanguage) => void;
  disabled?: boolean;
};

export default function BilingualLanguageSelector({
  value,
  onChange,
  disabled = false,
}: Props) {
  const choices: { value: TestLanguage; label: string; sub: string }[] = [
    { value: "hi", label: "हिंदी", sub: "Hindi Medium" },
    { value: "en", label: "English", sub: "English Medium" },
  ];

  return (
    <div>
      <p className="mb-3 text-sm font-bold text-slate-300">
        परीक्षा का माध्यम चुनें / Choose exam medium
      </p>

      <div className="grid grid-cols-2 gap-3">
        {choices.map((choice) => {
          const selected = value === choice.value;

          return (
            <button
              key={choice.value}
              type="button"
              disabled={disabled}
              onClick={() => onChange(choice.value)}
              aria-pressed={selected}
              className={`rounded-xl border p-4 text-left transition ${
                selected
                  ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                  : "border-white/15 bg-black/20 text-slate-300 hover:border-white/40"
              } disabled:cursor-not-allowed disabled:opacity-60`}
            >
              <span className="block font-black">{choice.label}</span>
              <span className="mt-1 block text-xs opacity-70">
                {choice.sub}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

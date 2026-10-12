export type TestLanguage = "en" | "hi";

export type BilingualText = {
  en: string;
  hi: string | null;
  hiStatus: "verified" | "provisional" | "missing";
};

export type BilingualOptions = {
  en: string[];
  hi: string[] | null;
  hiStatus: "verified" | "provisional" | "missing";
};

export type BilingualQuestion = {
  id: number;
  question: BilingualText;
  options: BilingualOptions;
};

export type BilingualSolution = {
  id: number;
  solutionAnswer: string;
  explanation: BilingualText;
};

export type BilingualTestData = {
  testId: string;
  title: BilingualText;
  totalQuestions: number;
  durationMinutes: number;
  negativeMarking: number;
  translationStatus: "provisional" | "verified";
  questions: BilingualQuestion[];
  solutions: BilingualSolution[];
};

export function getLocalizedText(
  text: BilingualText,
  language: TestLanguage
): { value: string; fallback: boolean; status: string } {
  if (language === "en") {
    return { value: text.en, fallback: false, status: "verified" };
  }

  if (text.hi && text.hi.trim()) {
    return {
      value: text.hi,
      fallback: false,
      status: text.hiStatus,
    };
  }

  return {
    value: text.en,
    fallback: true,
    status: "missing",
  };
}

export function getLocalizedOptions(
  options: BilingualOptions,
  language: TestLanguage
): { value: string[]; fallback: boolean; status: string } {
  if (language === "en") {
    return { value: options.en, fallback: false, status: "verified" };
  }

  if (options.hi && options.hi.length === options.en.length) {
    return {
      value: options.hi,
      fallback: false,
      status: options.hiStatus,
    };
  }

  return {
    value: options.en,
    fallback: true,
    status: "missing",
  };
}

import { Suspense } from "react";
import PetClientEngine from "./PetClientEngine";

export function generateStaticParams() {
  return [
    { id: "pet-2024" },
    { id: "pet-2023" },
    { id: "pet-2022" },
    { id: "pet-2021" },
    { id: "pet-2020" },
    { id: "pet-2019" },
    { id: "pet-2018" },
    { id: "pet-2017" },
    { id: "pet-2016" },
    { id: "pet-2015" },
    { id: "2024-paper-1" },
    { id: "2023-paper-1" },
    { id: "2022-paper-1" },
    { id: "2021-paper-1" },
    { id: "2020-model-1" },
    { id: "2019-model-1" },
    { id: "2018-model-1" },
    { id: "2017-model-1" },
    { id: "2016-model-1" },
    { id: "2015-model-1" }
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const testId = resolvedParams.id;

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070b16] text-white flex items-center justify-center font-bold">Loading PET Test Portal...</div>}>
      <PetClientEngine testId={testId} />
    </Suspense>
  );
}

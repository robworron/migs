import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Mignelli | Chiropractor",
  description:
    "Dr. John Mignelli Chiropractic has been serving patients in Niagara Falls and Welland since 2022 providing wellness care and injury recovery while making lasting human connections.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-8 sm:items-start"></main>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

import LandingButtons from "./components/LandingButtons";
import ServiceCard from "./components/ServiceCard";
import { SERVICES } from "./types";

export const metadata: Metadata = {
  title: "John Mignelli | Chiropractor",
  description:
    "Dr. John Mignelli Chiropractic has been serving patients in Niagara Falls and Welland since 2022 providing wellness care and injury recovery while making lasting human connections.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full">
      <section className="flex flex-col gap-4 md:gap-8 w-full max-w-6xl h-[1100px] md:h-[900px] mx-auto p-4 md:p-10 bg-[var(--primary)]">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 h-7/8">
          <div className="flex-3 md:flex-1 bg-[var(--foreground)] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
            <div className="relative w-full h-full">
              <Image
                fill
                src="/body.png"
                alt="John Mignelli Chiropractic Logo"
                className="object-cover"
              />
            </div>
          </div>
          <article className="flex-2 md:flex-1 flex flex-col justify-center gap-4 bg-[var(--foreground)] p-4 md:p-6 lg:p-8 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                Dr. John Mignelli
              </h1>
              <h2 className="text-lg lg:text-3xl font-semibold">
                Niagara Chiropractor
              </h2>
            </div>
            <p className="text-sm md:text-base">
              John Mignelli has been providing quality Chiropractic care in the
              Niagara Region since 2020. His practice is built on empowering
              patients and building lasting connections within his local
              community.
            </p>
            <LandingButtons />
          </article>
        </div>
        <p className="w-full bg-[var(--foreground)] p-4 text-center text-sm md:text-base opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
          <b>
            <i>
              "I didn't know how much I could improve until I started seeing a
              Chiropractor. Since I've been in Chiropractic, I've improved by
              leaps and bounds both mentally and physically."
            </i>
          </b>{" "}
          -- Michael Jordan
        </p>
      </section>
      <section className="flex justify-center items-center w-full h-auto px-4 py-8 md:p-8 bg-[var(--foreground)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SERVICES.map(
            (service, index) =>
              index < 8 && (
                <div
                  key={index}
                  className="w-32 h-48 lg:w-48 lg:h-72 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <ServiceCard
                    title={service.name}
                    href={service.href}
                    imageSrc={service.imageSrc}
                  />
                </div>
              ),
          )}
        </div>
      </section>
    </main>
  );
}

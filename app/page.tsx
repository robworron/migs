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
    <main className="flex flex-col gap-12 w-full max-w-6xl mx-auto pt-12 px-8">
      <section className="flex">
        <div className="flex-1">
          <Image
            width={500}
            height={1000}
            src="/temp_body.png"
            alt="John Mignelli Chiropractic Logo"
          />
        </div>
        <article className="flex flex-col flex-1 justify-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Dr. John Mignelli
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-semibold">
              Niagara Chiropractor
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <LandingButtons />
        </article>
      </section>
      <section className="max-w-6xl h-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} title={service.name} />
          ))}
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import Image from "next/image";

import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Acupuncture",
  description:
    "Acupuncture is a service offered by John Mignelli Chiropractic which is helpful for treating muscle and joint pain, and is helpful in wellness care.",
};

export default function AcupuncturePage() {
  return (
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24">
      <section className="relative flex justify-center w-full">
        <span className="z-[9] absolute top-[-8] bg-[var(--primary)] w-full h-4" />
        <div className="absolute top-20 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-3/4">
            <div className="aspect-16/9">
              <Image
                src="/temp_acupuncture.png"
                alt="Acupuncture"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="absolute top-[-30] left-[-200] bg-[var(--secondary)] p-4 pl-60 text-right text-white text-2xl font-bold z-[10]">
              Acupuncture Treatment
            </h2>
            <div className="z-[10] absolute bottom-[-150] right-[-200] max-w-full p-4 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16">
                Acupuncture is an ancient treatment that began in China and has
                been performed on people therapeutically for over 3000 years. It
                was extensively researched in a medical context more recently
                and has many benefits for those in pain. It is often used to
                lower pain levels, and can also be used to help with injury
                healing, improve circulation, help with stress, and lead to
                better sleep. In other situations, many athletes or active
                people turn to acupuncture to optimize recovery and performance,
                and enhance the activation of muscles during training and
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

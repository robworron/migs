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
    <main className="flex-1 flex flex-col gap-12 items-center w-full mx-auto py-12 lg:py-24">
      {/** SM, MD, LG SCREENS */}
      <section className="flex flex-col gap-8 xl:hidden w-full">
        <div className="flex w-full">
          <div className="flex-1 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
          <h2 className="flex-1 flex justify-center items-center h-16 px-8 md:px-16 py-2 md:py-4 text-center bg-[var(--secondary)] text-white text-xl md:text-2xl lg:text-3xl font-bold">
            Acupuncture
          </h2>
          <div className="flex-6 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-4/5 aspect-[16/9]">
            <Image
              src="/services/acupuncture.webp"
              alt="Acupuncture Image"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
        <p className="w-4/5 mx-auto px-8 py-4 bg-[var(--secondary)] text-sm md:text-base lg:text-lg text-center text-white">
          Acupuncture is an ancient treatment that began in China and has been
          performed on people therapeutically for over 3000 years. It was
          extensively researched in a medical context more recently and has many
          benefits for those in pain. It is often used to lower pain levels, and
          can also be used to help with injury healing, improve circulation,
          help with stress, and lead to better sleep. In other situations, many
          athletes or active people turn to acupuncture to optimize recovery and
          performance, and enhance the activation of muscles during training and
          competition.
        </p>
      </section>

      {/** XL SCREENS */}
      <section className="hidden relative xl:flex justify-center w-full">
        <span className="z-10 absolute -top-4 w-full h-4 bg-[var(--primary)]" />
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-3/5 pb-20">
            <div className="aspect-[16/9]">
              <Image
                src="/services/acupuncture.webp"
                alt="Acupuncture Image"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Acupuncture
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
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

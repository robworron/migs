import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Injury Rehabilitation",
  description:
    "Sports injuries, workplace injuries (WSIB), motor-vehicle injuries all respond well to Chiropractic rehab which John Mignelli has experience providing.",
};

export default function InjuryPage() {
  return (
    <main className="flex-1 flex flex-col items-center w-full mx-auto py-8 xl:py-24">
      <section className="relative flex justify-center w-full">
        <div className="hidden xl:flex absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="xl:flex-1 xl:min-w-2xs" />
          <div className="xl:flex-4 flex flex-col items-center w-9/10 md:w-3/5 xl:min-w-[1000px] xl:max-w-[1200px] text-center">
            <h2 className="flex justify-center md:justify-start w-full bg-[var(--secondary)] p-4 md:px-12 text-white text-2xl md:text-3xl font-bold z-[10]">
              Injury Rehabilitation
            </h2>
            <div className="flex flex-col xl:flex-row w-full xl:min-w-xl">
              <div className="xl:flex-5 relative w-full">
                <div className="aspect-[4/3] xl:aspect-[16/9]">
                  <Image
                    src="/services/injury.webp"
                    alt="Injury Rehabilitation Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="xl:flex-3 xl:flex xl:items-center max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  Both acute and chronic pains need exercise and movement to
                  improve. Anything from sprained ankles to surgically replaced
                  shoulders have common rehab exercise protocols that are
                  critical in recovering properly. Passive therapy alone is not
                  enough to heal optimally. Chiropractic treatment plans should
                  always include some sort of exercise plan and education on how
                  to navigate through recovery.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:flex-1" />
        </div>
      </section>
    </main>
  );
}

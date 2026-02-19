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
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24">
      <section className="relative flex justify-center w-full">
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="flex-1"></div>
          <div className="flex-4 flex flex-col max-w-[1200px]">
            <h2 className="w-full bg-[var(--secondary)] p-4 px-12 text-white text-3xl font-bold z-[10]">
              Injury Rehabilitation
            </h2>
            <div className="flex w-full">
              <div className="flex-2 relative w-full">
                <div className="aspect-16/9">
                  <Image
                    src="/services/injury.png"
                    alt="Injury Rehabilitation Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="flex-1 flex items-center max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="mx-4 p-4">
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
          <div className="flex-1"></div>
        </div>
      </section>
    </main>
  );
}

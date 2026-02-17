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
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24 mb-36">
      <section className="relative flex justify-center w-full">
        <span className="z-10 absolute -top-4 w-full h-4 bg-[var(--primary)]" />
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-2/3 pb-20">
            <div className="aspect-[16/9]">
              <Image
                src={"/services/injury.png"}
                alt="Injury Rehabilitation Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Injury Rehabilitation
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                Both acute and chronic pains need exercise and movement to
                improve. Anything from sprained ankles to surgically replaced
                shoulders have common rehab exercise protocols that are critical
                in recovering properly. Passive therapy alone is not enough to
                heal optimally. Chiropractic treatment plans should always
                include some sort of exercise plan and education on how to
                navigate through recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

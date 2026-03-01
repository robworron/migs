import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Lifestyle Modifications",
  description:
    "Exercise, stress management, sleep quality, and lifestyle choices make a major impact to your overall health which John Mignelli can help advise you on.",
};

export default function LifestylePage() {
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
              Lifestyle Modifications
            </h2>
            <div className="flex flex-col xl:flex-row w-full xl:min-w-xl">
              <div className="xl:flex-3 relative w-full">
                <div className="aspect-[4/3]">
                  <Image
                    src="/services/lifestyle.webp"
                    alt="Lifestyle Modifications Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="xl:flex-3 xl:flex xl:flex-col xl:justify-center max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  Chiropractic care is helpful in managing pain and improving
                  the mobility and function of the body. However, the largest
                  changes in health come from consistently making good decisions
                  with your health.
                </p>
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  Eating properly, hydrating, sleeping well, managing stress,
                  and practising a healthy mindset are paramount in wellness.
                  Oftentimes when patients make a conscious effort to apply what
                  is discussed in the clinic, their improvements extend well
                  beyond what their expectations are. It really can be easy to
                  get well, and John is happy to help you get there.
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

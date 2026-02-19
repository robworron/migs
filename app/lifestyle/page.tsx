import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Lifestyle Modifications",
  description:
    "Exercise, stress management, sleep quality, and lifestyle choices make a major impact to your overall health which John Mignelli can help advise you on.",
};

export default function LifestylePage() {
  {
    /*return (
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24 mb-36">
      <section className="relative flex justify-center w-full">
        <span className="z-10 absolute -top-4 w-full h-4 bg-[var(--primary)]" />
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-2/3 pb-20">
            <div className="aspect-[16/10]">
              <Image
                src={"/services/lifestyle.png"}
                alt="Lifestyle Modifications Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Lifestyle Modifications
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                Chiropractic care is helpful in managing pain and improving the
                mobility and function of the body. However, the largest changes
                in health come from consistently making good decisions with your
                health.
              </p>
              <p className="mx-16 my-4">
                Eating properly, hydrating, sleeping well, managing stress, and
                practising a healthy mindset are paramount in wellness.
                Oftentimes when patients make a conscious effort to apply what
                is discussed in the clinic, their improvements extend well
                beyond what their expectations are. It really can be easy to get
                well, and John is happy to help you get there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );*/
  }
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
              Lifestyle Modifications
            </h2>
            <div className="flex w-full">
              <div className="flex-3 relative w-full">
                <div className="aspect-4/3">
                  <Image
                    src="/services/lifestyle.png"
                    alt="Lifestyle Modifications Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="flex-3 flex flex-col justify-center max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="mx-4 p-4">
                  Chiropractic care is helpful in managing pain and improving
                  the mobility and function of the body. However, the largest
                  changes in health come from consistently making good decisions
                  with your health.
                </p>
                <p className="mx-4 p-4">
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
          <div className="flex-1"></div>
        </div>
      </section>
    </main>
  );
}

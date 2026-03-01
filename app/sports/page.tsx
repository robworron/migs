import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Sports Injuries",
  description:
    "Athletes can optimize their performance and prevent or recover from Injury with Chiropractic care and John Mignelli is very experienced with athletes.",
};

export default function SportsPage() {
  return (
    <main className="flex-1 flex flex-col items-center w-full mx-auto py-8 xl:py-24">
      <section className="relative flex justify-center w-full">
        <div className="hidden xl:flex absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="xl:flex-1 xl:min-w-2xs" />
          <div className="xl:flex-4 flex flex-col items-center w-4/5 md:w-3/5 xl:min-w-[1000px] xl:max-w-[1200px]">
            <h2 className="flex justify-center md:justify-start w-full bg-[var(--secondary)] p-4 md:px-12 text-white text-2xl md:text-3xl font-bold z-[10]">
              Sports Injuries
            </h2>
            <div className="flex flex-col xl:flex-row w-full xl:min-w-xl">
              <div className="xl:flex-4 relative w-full">
                <div className="aspect-[4/3] xl:aspect-[16/9]">
                  <Image
                    src="/services/sports.webp"
                    alt="Sports Injuries Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="xl:flex-3 max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  John has an extensive history of treating athletes. He was the
                  full-time trainer for the Niagara Falls Canucks Jr. A (OJHL)
                  hockey team for four seasons, and continues to help cover
                  junior hockey games when he is able. He has also coordinated
                  and provided coverage for the Niagara Rugby Club, worked with
                  golfers at Eagle Valley Golf Course, was part of the medical
                  staff at the Niagara 2022 Canada Summer Games, and treated
                  many NCAA athletes during his education at D’Youville
                  University.
                </p>
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  John has also worked with FireFit athletes representing
                  Niagara Falls and St. Catharines fire departments competing in
                  FireFit competitions nationally. Besides high-performance
                  athletes, John has worked with countless everyday people who
                  enjoy playing sports and keeping active recreationally. As a
                  lifelong enjoyer of playing and participating in sports, John
                  is grateful for the opportunity to keep his patients playing.
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

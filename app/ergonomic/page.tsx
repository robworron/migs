import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Ergonomic Assessments",
  description:
    "Ergonomic Assessments can prevent workplace injuries and improve employee performance, John Mignelli Chiropractic can perform ergonomic assessments.",
};

export default function ErgonomicPage() {
  return (
    <main className="flex-1 flex flex-col gap-12 items-center w-full mx-auto py-12 lg:py-24">
      {/** SM, MD, LG SCREENS */}
      <section className="flex flex-col gap-8 xl:hidden w-full">
        <div className="flex w-full">
          <div className="flex-1 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
          <h2 className="flex-1 flex justify-center items-center h-16 px-8 md:px-16 py-2 md:py-4 text-center bg-[var(--secondary)] text-white text-xl md:text-2xl xl:text-3xl font-bold">
            Ergonomic Assessments
          </h2>
          <div className="flex-6 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-4/5 md:w-3/5 aspect-[8/7]">
            <Image
              src={"/services/ergonomic.png"}
              alt="Ergonomic Assessments Image"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
        <p className="w-4/5 md:w-3/5 mx-auto px-8 py-4 bg-[var(--secondary)] text-sm md:text-base lg:text-lg text-center text-white">
          John is capable of performing workplace ergonomic assessments on-site.
          Workplace ergonomics can be optimized to improve employee satisfaction
          and efficiency, and reduce injury and WSIB claims. This is a valuable
          service that is often overlooked by employers, or by those who work in
          routine positions daily.
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
            <div className="aspect-[8/7]">
              <Image
                src={"/services/ergonomic.png"}
                alt="Ergonomic Assessments Image"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Ergonomic Assessments
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16">
                John is capable of performing workplace ergonomic assessments
                on-site. Workplace ergonomics can be optimized to improve
                employee satisfaction and efficiency, and reduce injury and WSIB
                claims. This is a valuable service that is often overlooked by
                employers, or by those who work in routine positions daily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

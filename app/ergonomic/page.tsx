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
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto">
      <section className="relative flex justify-center items-center w-full mt-16">
        <div className="flex-1">
          <NavMenu />
        </div>
        <div className="relative flex-3 w-full h-72">
          <Image
            src="/temp_old_man.png"
            alt="Chiropractic"
            fill
            className="object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/100 to-white/20" />
          <h3 className="absolute bottom-0 left-10 p-16 text-white text-5xl font-bold">
            Ergonomic Assessments
          </h3>
        </div>
      </section>
      <section className="flex gap-8 items-center w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <Image
            src="/temp_ergonomic.png"
            alt="Service"
            width={400}
            height={270}
          />
        </div>
        <p className="flex-1 indent-8">
          John is capable of performing workplace ergonomic assessments on-site.
          Workplace ergonomics can be optimized to improve employee satisfaction
          and efficiency, and reduce injury and WSIB claims. This is a valuable
          service that is often overlooked by employers, or by those who work in
          routine positions daily.
        </p>
      </section>
    </main>
  );
}

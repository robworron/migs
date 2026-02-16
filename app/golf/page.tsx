import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Golf Injuries and Fitness",
  description:
    "Golf related injuries can prevent you from playing your best, John Mignelli is Titleist Performance certified in treating and optimizing golfers.",
};

export default function GolfPage() {
  return (
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto">
      <section className="relative flex justify-center items-center w-full mt-16">
        <div className="relative flex-3 w-full h-96">
          <Image
            src="/temp_golf.png"
            alt="Chiropractic"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0" />
          <h3 className="absolute bottom-0 left-10 p-16 text-white text-5xl font-bold">
            Golf Injuries and Fitness
          </h3>
        </div>
      </section>
      <section className="flex gap-8 items-center w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <NavMenu />
        </div>
        <div className="flex-1">
          <div className="flex gap-4 mb-4">
            <Image
              src="/temp_old_man.png"
              alt="Service"
              width={300}
              height={180}
            />
            <Image
              src="/temp_service.png"
              alt="Service"
              width={300}
              height={180}
            />
          </div>
          <p className="indent-8">
            John is capable of performing workplace ergonomic assessments
            on-site. Workplace ergonomics can be optimized to improve employee
            satisfaction and efficiency, and reduce injury and WSIB claims. This
            is a valuable service that is often overlooked by employers, or by
            those who work in routine positions daily.
          </p>
        </div>
      </section>
    </main>
  );
}

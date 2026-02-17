import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Laser Therapy",
  description:
    "Laser Therapy is a useful addition to Chiropractic Treatment by decreasing pain levels and boosting the body’s ability to heal itself.",
};

export default function LaserPage() {
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
                src={"/services/temp_laser.png"}
                alt="Laser Therapy Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Laser Therapy
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                Laser therapy uses specific wavelengths of light to penetrate
                through human tissue and stimulate healing responses. It is a
                non-invasive and very gentle therapy that is especially useful
                for soft-tissue injuries and tender muscles. This treatment can
                expedite tissue healing and reduce inflammation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

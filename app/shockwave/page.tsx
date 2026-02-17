import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Shock Wave Therapy",
  description:
    "Shockwave Therapy is used by John Mignelli for Chiropractic treatment of soft tissue injuries including sprains, tendinitis, plantar fasciitis, and other pains.",
};

export default function ShockwavePage() {
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
                src={"/services/shockwave.png"}
                alt="Shockwave Therapy Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Shockwave Therapy
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                Shockwave therapy is the process of using high energy sound
                waves to treat soft-tissue injuries. By impacting specific
                tissues, shockwaves can break down scar tissue, promote tissue
                healing and blood flow, reduce inflammation, and increase local
                healing responses. It is especially effective for healing
                injuries to muscles, tendons, ligaments, and the plantar fascia
                of the feet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

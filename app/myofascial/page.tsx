import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Myofascial Treatments",
  description:
    "John Mignelli incorporates hands-on muscular deep-tissue work to loosen tight muscles and trigger points and improve joint function and mobility.",
};

export default function MyofascialPage() {
  return (
    <main className="flex-1 flex flex-col gap-12 items-center w-full mx-auto py-12 lg:py-24">
      {/** SM, MD, LG SCREENS */}
      <section className="flex flex-col gap-8 xl:hidden w-full">
        <div className="flex w-full">
          <div className="flex-1 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
          <h2 className="flex-5 flex justify-center items-center h-16 px-8 md:px-16 py-2 md:py-4 text-center bg-[var(--secondary)] text-white text-xl md:text-2xl lg:text-3xl font-bold">
            Myofascial Treatment
          </h2>
          <div className="flex-6 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-4/5 md:w-3/5 aspect-[1/1]">
            <Image
              src={"/services/myofascial.webp"}
              alt="Myofascial Treatment Image"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
        <p className="w-4/5 md:w-3/5 mx-auto px-8 py-4 bg-[var(--secondary)] text-sm md:text-base lg:text-lg text-center text-white">
          Soft tissue treatments can include manual hands-on deep-tissue work,
          instrument-assisted work, and other techniques such as pin-and
          stretch, active muscular lengthening under pressure, and trigger point
          therapy. Treating tight muscles is very beneficial for maintaining
          mobility and comfort while working and/or keeping active. Older
          populations find these treatments valuable for managing arthritic pain
          by keeping the muscles that attach to arthritic joints loose. These
          techniques pair well with Chiropractic adjustments to relieve tension
          in the spine, maintain mobility, and help preserve joint health.
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
            <div className="aspect-[4/3]">
              <Image
                src={"/services/myofascial.webp"}
                alt="Myofascial Treatment Image"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Myofascial Treatment
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/3 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16">
                Soft tissue treatments can include manual hands-on deep-tissue
                work, instrument-assisted work, and other techniques such as
                pin-and stretch, active muscular lengthening under pressure, and
                trigger point therapy. Treating tight muscles is very beneficial
                for maintaining mobility and comfort while working and/or
                keeping active. Older populations find these treatments valuable
                for managing arthritic pain by keeping the muscles that attach
                to arthritic joints loose. These techniques pair well with
                Chiropractic adjustments to relieve tension in the spine,
                maintain mobility, and help preserve joint health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

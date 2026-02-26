import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Pre and Post Surgical Rehabilitation",
  description:
    "Surgical patients looking for proper rehab should optimize their procedure’s outcome using Chiropractic care with exercise and recovery treatment.",
};

export default function SurgicalPage() {
  return (
    <main className="flex-1 flex flex-col items-center w-full mx-auto py-8 xl:py-24">
      <section className="relative flex justify-center w-full">
        <div className="hidden xl:flex absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="xl:flex-1 xl:min-w-2xs" />
          <div className="xl:flex-4 flex flex-col items-center w-4/5 md:w-3/5 xl:min-w-[1000px] xl:max-w-[1200px]">
            <h2 className="flex justify-center md:justify-start w-full bg-[var(--secondary)] p-4 md:px-12 text-center text-white text-xl md:text-2xl lg:text-3xl font-bold z-[10]">
              Pre and Post Surgical Rehabilitation
            </h2>
            <div className="flex flex-col xl:flex-row w-full xl:min-w-xl">
              <div className="xl:flex-4 relative w-full">
                <div className="aspect-[4/3] xl:aspect-[16/9]">
                  <Image
                    src="/services/surgical.png"
                    alt="Pre and Post Surgical Rehabilitation Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="xl:flex-3 max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="p-2 md:mx-4 md:p-4 text-sm md:text-base">
                  John has years of experience working with pre- and
                  post-surgical spine and extremity patients. He is capable of
                  rehabbing many common orthopedic post-surgical cases
                  including:
                </p>
                <ul className="p-2 md:mx-4 md:p-4 list-disc list-inside text-sm md:text-base text-left">
                  <li>Spinal fusion</li>
                  <li>Spinal discectomy and microdiscectomy</li>
                  <li>Laminectomy</li>
                  <li>Disc Replacement</li>
                  <li>Hip, Shoulder, and Knee replacements</li>
                  <li>Shoulder Rotator Cuff Repair</li>
                  <li>Knee Cruciate Ligament and Meniscal Procedures</li>
                  <li>Achilles Tendon Repair</li>
                  <li>Post-Fracture Muscular Atrophy</li>
                  <li>Hand and Wrist Surgery</li>
                  <li>Other Ligament Reconstructions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:flex-1" />
        </div>
      </section>
    </main>
  );
}

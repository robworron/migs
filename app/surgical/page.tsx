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
                src={"/services/surgical.png"}
                alt="Pre and Post Surgical Rehabilitation Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-16 py-4 text-center text-white text-3xl font-bold">
              Pre and Post Surgical Rehabilitation
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-3/4 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                John has years of experience working with pre- and post-surgical
                spine and extremity patients. He is capable of rehabbing many
                common orthopedic post-surgical cases including:
              </p>
              <ul className="mx-16 my-4 list-disc list-inside text-left">
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
      </section>
    </main>
  );
}

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
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24">
      <section className="relative flex justify-center w-full">
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="flex-1"></div>
          <div className="flex-4 flex flex-col max-w-[1200px]">
            <h2 className="w-full bg-[var(--secondary)] p-4 px-12 text-white text-3xl font-bold z-[10]">
              Pre and Post Surgical Rehabilitation
            </h2>
            <div className="flex w-full">
              <div className="flex-4 relative w-full">
                <div className="aspect-16/9">
                  <Image
                    src="/services/surgical.png"
                    alt="Pre and Post Surgical Rehabilitation Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="flex-3 flex flex-col items-center max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="mx-4 p-4">
                  John has years of experience working with pre- and
                  post-surgical spine and extremity patients. He is capable of
                  rehabbing many common orthopedic post-surgical cases
                  including:
                </p>
                <ul className="mx-4 p-4 list-disc list-inside text-left">
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
          <div className="flex-1"></div>
        </div>
      </section>
    </main>
  );
}

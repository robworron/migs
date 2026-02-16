import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Chiropractic",
  description:
    "John Mignelli has been providing high quality Chiropractic care to Niagara Falls and Welland treating back pain, neck pain, and muscle and joint pain.",
};

export default function ChiropracticPage() {
  return (
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24 mb-36">
      <section className="relative flex justify-center w-full">
        <span className="z-10 absolute -top-4 w-full h-4 bg-[var(--primary)]" />
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-3/4 pb-20">
            <div className="aspect-[4/3]">
              <Image
                src={"/chiropractic2.png"}
                alt="Chiropractic"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Chiropractic
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                Chiropractic is a proven safe and effective conservative therapy
                for disorders of the neuro-musculoskeletal system. Chiropractors
                most often treat patients for back pain and neck pain, but are
                effective choices for managing headaches, other types of joint
                pain (shoulder, hip, knee, ankle, wrist, elbow, etc.),
                arthritis, concussions, and sports injuries.
              </p>
              <p className="mx-16 my-4">
                While many patients come in with acute pain, Chiropractic is
                also useful in a wellness context. Regular treatments can help
                people feel their best more often, and help to mitigate or
                prevent future instances of joint and muscle pain. After
                treatment many patients feel energized, looser, and often sleep
                better.
              </p>
              <p className="mx-16 my-4">
                When coming in with a specific injury or pain you are seeking
                care for, a full physical exam will take place to get a better
                understanding of what’s happening. Seeing a Chiropractor is a
                fast and effective way to begin care without long wait times at
                hospitals or other clinics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

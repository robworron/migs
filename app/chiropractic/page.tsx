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
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto py-24">
      <section className="relative flex justify-center w-full">
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full pt-10">
          <div className="flex-2"></div>
          <div className="flex-5 flex flex-col">
            <h2 className="w-full bg-[var(--secondary)] p-4 px-12 text-white text-3xl font-bold z-[10]">
              Chiropractic Care
            </h2>
            <div className="flex w-full">
              <div className="flex-3 relative w-full">
                <div className="aspect-16/9">
                  <Image
                    src="/services/chiropractic.png"
                    alt="Chiropractic Care Image"
                    fill
                    className="object-fit brightness-60 opacity-80"
                  />
                </div>
              </div>
              <div className="flex-4 max-w-full p-4 bg-[var(--primary)] text-left text-white">
                <p className="mx-4 p-4">
                  Chiropractic is a proven safe and effective conservative
                  therapy for disorders of the neuro-musculoskeletal system.
                  Chiropractors most often treat patients for back pain and neck
                  pain, but are effective choices for managing headaches, other
                  types of joint pain (shoulder, hip, knee, ankle, wrist, elbow,
                  etc.), arthritis, concussions, and sports injuries.
                </p>
                <p className="mx-4 p-4">
                  While many patients come in with acute pain, Chiropractic is
                  also useful in a wellness context. Regular treatments can help
                  people feel their best more often, and help to mitigate or
                  prevent future instances of joint and muscle pain. After
                  treatment many patients feel energized, looser, and often
                  sleep better.
                </p>
                <p className="mx-4 p-4">
                  When coming in with a specific injury or pain you are seeking
                  care for, a full physical exam will take place to get a better
                  understanding of what’s happening. Seeing a Chiropractor is a
                  fast and effective way to begin care without long wait times
                  at hospitals or other clinics.
                </p>
              </div>
            </div>
            <p className="w-full bg-[var(--secondary)] p-4 px-28 text-white text-xl z-[10]">
              <b className="font-semibold">
                <i>
                  "As long as I see the chiropractor, I feel like I'm one step
                  ahead of the game"
                </i>
              </b>{" "}
              - Tom Brady
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
      </section>
    </main>
  );
}

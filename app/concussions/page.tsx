import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Concussion Treatment",
  description:
    "John Mignelli is certified in treating and managing Concussions, it is important to receive proper care to recover properly from concussion injuries.",
};

export default function ConcussionPage() {
  return (
    <main className="flex flex-col gap-12 items-center w-full min-h-screen mx-auto">
      <section className="relative flex justify-center items-center w-full mt-16">
        <div className="flex-1">
          <NavMenu />
        </div>
        <div className="relative flex-3 w-full h-96">
          <Image
            src="/temp_concussion.png"
            alt="Chiropractic"
            fill
            className="object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/100 to-white/20" />
          <h3 className="absolute bottom-0 right-10 p-16 text-white text-5xl font-bold">
            Concussion Treatment
          </h3>
        </div>
      </section>
      <section className="flex gap-8 items-center w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <Image
            src="/temp_service.png"
            alt="Service"
            width={400}
            height={270}
          />
        </div>
        <p className="flex-1 indent-8">
          John completed Shift Concussion Management in 2023 and is equipped
          with the modern education and experience to treat concussion injuries
          successfully. Concussions can be stressful to navigate, and can
          persist for longer than necessary if they are not handled properly
          from the onset. If you need help with a concussion or post-concussion
          syndrome, modern concussion rehab is something you need to consider to
          start living on your terms.
        </p>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

const BUTTON_STYLES =
  "inline-block bg-[var(--primary)] p-2 md:px-4 md:py-2 text-white rounded-full shadow-md transition-colors duration-300 hover:bg-linear-to-b hover:from-[var(--primary)] hover:to-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-8 w-full max-w-6xl h-[1100px] md:h-[900px] mx-auto p-4 md:p-10 bg-[var(--primary)]">
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 h-7/8">
        <div className="flex-3 md:flex-1 bg-[var(--foreground)] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
          <div className="relative w-full h-full">
            <Image
              fill
              priority
              src="/body.webp"
              alt="Photo of Dr. John Mignelli"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
        <article className="flex-2 md:flex-1 flex flex-col justify-center gap-4 bg-[var(--foreground)] p-4 md:p-6 lg:p-8 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Dr. John Mignelli
            </h1>
            <h2 className="text-lg lg:text-3xl font-semibold">
              Niagara Chiropractor
            </h2>
          </div>
          <p className="text-sm md:text-base">
            John Mignelli has been providing quality chiropractic care in the
            Niagara Region since 2020. His practice is built on empowering
            patients and building lasting connections within his local
            community.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className={BUTTON_STYLES}>
              Read More
            </Link>
            <Link href="/contact" className={BUTTON_STYLES}>
              Book Now
            </Link>
          </div>
        </article>
      </div>
      <blockquote className="w-full bg-[var(--foreground)] p-4 text-center text-sm md:text-base opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200">
        <p className="font-bold italic">
          "I didn't know how much I could improve until I started seeing a
          Chiropractor. Since I've been in Chiropractic, I've improved by leaps
          and bounds both mentally and physically."
        </p>
        <footer>-- Michael Jordan</footer>
      </blockquote>
    </section>
  );
}

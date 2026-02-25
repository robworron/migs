import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "John Mignelli graduated from the Chiropractic program at D'Youville University in 2020. He has been serving Niagara Falls and Welland since then.",
};

const PARAGRAPH_STYLES = "text-sm lg:text-base indent-8";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full max-w-6xl min-h-screen mx-auto mt-8 md:mt-0 md:pt-12 md:px-8">
      <section className="flex flex-col-reverse md:flex-row gap-6 lg:gap-12">
        <article className="md:flex-1 flex flex-col gap-4 p-6 md:p-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            About John Mignelli, DC
          </h1>
          <p className={PARAGRAPH_STYLES}>
            Dr. John Mignelli has been treating patients in the Niagara region
            since 2020. He completed his undergraduate education at Brock
            University in 2015 before becoming a Doctor of Chiropractic at
            D'Youville University in 2020. His modern education and clinical
            experience in advanced medical rehab centers make him a versatile
            provider comfortable with everyone from regular people who want to
            live healthy and move well, to pre- and post-operative patients, and
            athletes looking to optimize their performance and longevity.
          </p>
          <p className={PARAGRAPH_STYLES}>
            One of John's focuses is to ensure that each patient feels a genuine
            connection and leaves confident that their treatment will provide
            meaningful results. John strives to work with integrity and to be a
            person that is trusted in the community. Empowering patients to
            overcome pain and get back on track to living a healthy active
            lifestyle is paramount in John's practice philosophy.
          </p>
          <p className={PARAGRAPH_STYLES}>
            John has completed extra training and certification via McMaster
            Sports Medical Acupuncture, Shift Concussion Management, Precision
            Nutrition, and is a Titleist Performance Institute certified
            golf-fitness professional. He also served as the trainer for the
            Niagara Falls Canucks from 2021-2025 helping many elite level hockey
            players recover from injury and play their best. John also
            contributes to the Canadian Chiropractic Examining Board as part of
            a panel that helps to develop our national licensure exams.
          </p>
        </article>
        <div className="md:flex-1 flex justify-center md:justify-end w-full py-8 md:py-24 lg:py-8 bg-[var(--primary)] md:bg-transparent">
          <div className="relative w-[300px] md:w-full lg:w-[80%] h-[420px] md:h-full bg-[var(--foreground)] md:bg-transparent">
            <Image src="/body.png" alt="temp" fill className="object-fit" />
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "John Mignelli graduated from the Chiropractic program at D'Youville University in 2020. He has been serving Niagara Falls and Welland since then.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full max-w-6xl min-h-screen mx-auto pt-12 px-8">
      <section className="flex gap-12">
        <article className="flex flex-col flex-1 gap-4">
          <h1 className="text-3xl font-bold">About John Mignelli, DC</h1>
          <p className="indent-8">
            Dr. John Mignelli has been treating patients in the Niagara region
            since 2020. He completed his undergraduate education at Brock
            University in 2015 before becoming a Doctor of Chiropractic at
            D'Youville University in 2020. His modern education and clinical
            experience in advanced medical rehab centers make him a versatile
            provider comfortable with everyone from regular people who want to
            live healthy and move well, to pre- and post-operative patients, and
            athletes looking to optimize their performance and longevity.
          </p>
          <p className="indent-8">
            One of John's focuses is to ensure that each patient feels a genuine
            connection and leaves confident that their treatment will provide
            meaningful results. John strives to work with integrity and to be a
            person that is trusted in the community. Empowering patients to
            overcome pain and get back on track to living a healthy active
            lifestyle is paramount in John's practice philosophy.
          </p>
          <p className="indent-8">
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
        <div className="flex justify-end flex-1 w-full">
          <div className="relative w-[90%] h-full">
            <Image src="/body.png" alt="temp" fill className="object-fit" />
          </div>
        </div>
      </section>
    </main>
  );
}

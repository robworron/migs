import { Metadata } from "next";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "Golf Injuries and Fitness",
  description:
    "Golf related injuries can prevent you from playing your best, John Mignelli is Titleist Performance certified in treating and optimizing golfers.",
};

export default function GolfPage() {
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
                src={"/services/golf.png"}
                alt="Golf Injuries and Fitness Image"
                fill
                className="object-fit opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Golf Injuries and Fitness
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16 my-4">
                John is a Titleist Performance Institute certified golf fitness
                instructor. With this certification he is able to assess golfing
                movement faults and identify the root causes of pain while
                golfing. John has worked with amateur golfers, collegiate
                golfers, and professional golfers to overcome injury and
                dysfunction and allow them to play their best. If you are an
                avid golfer or have had your game impacted or marginalized by
                injury, John would love to help you get back on the course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

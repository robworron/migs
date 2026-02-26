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
    <main className="flex-1 flex flex-col gap-12 items-center w-full mx-auto py-12 lg:py-24">
      {/** SM, MD, LG SCREENS */}
      <section className="relative flex flex-col gap-8 xl:hidden w-full">
        <div className="flex w-full">
          <div className="flex-1 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
          <h2 className="flex-10 lg:flex-6 flex justify-center items-center h-16 px-8 md:px-16 py-2 md:py-4 text-center bg-[var(--secondary)] text-white text-xl md:text-2xl lg:text-3xl font-bold">
            Golf Injuries and Fitness
          </h2>
          <div className="flex-6 flex items-center h-16">
            <div className="w-full h-4 bg-[var(--primary)]" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-4/5 aspect-[16/9]">
            <Image
              src={"/services/golf.png"}
              alt="Golf Injuries and Fitness Image"
              fill
              className="object-cover opacity-80"
            />
            <div className="z-20 absolute top-0 right-3 translate-x-1/2 w-22 h-22 md:w-36 md:h-36 lg:w-42 lg:h-42">
              <Image
                src="/assets/titleist.png"
                alt="Titleist Image"
                fill
                className="object-fit brightness-60"
              />
            </div>
          </div>
        </div>
        <p className="w-4/5 mx-auto px-8 py-4 bg-[var(--secondary)] text-sm md:text-base lg:text-lg text-center text-white">
          John is a Titleist Performance Institute certified golf fitness
          instructor. With this certification he is able to assess golfing
          movement faults and identify the root causes of pain while golfing.
          John has worked with amateur golfers, collegiate golfers, and
          professional golfers to overcome injury and dysfunction and allow them
          to play their best. If you are an avid golfer or have had your game
          impacted or marginalized by injury, John would love to help you get
          back on the course.
        </p>
      </section>

      {/** XL SCREENS */}
      <section className="hidden relative xl:flex justify-center w-full">
        <span className="z-10 absolute -top-4 w-full h-4 bg-[var(--primary)]" />
        <div className="absolute top-10 left-0">
          <NavMenu />
        </div>
        <div className="flex justify-center w-full max-w-6xl">
          <div className="relative w-3/5 pb-20">
            <div className="aspect-[16/9]">
              <Image
                src={"/services/golf.png"}
                alt="Golf Injuries and Fitness Image"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h2 className="z-20 absolute -top-10 left-0 -translate-x-1/3 bg-[var(--secondary)] px-24 py-4 text-center text-white text-3xl font-bold">
              Golf Injuries and Fitness
            </h2>
            <div className="z-20 absolute bottom-0 right-0 translate-x-1/4 translate-y-2/3 max-w-full py-8 bg-[var(--secondary)] text-center text-white">
              <p className="mx-16">
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
            <div className="z-20 absolute top-20 right-0 translate-x-1/2 w-72 h-72">
              <Image
                src="/assets/titleist.png"
                alt="Titleist Image"
                fill
                className="object-fit brightness-60"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

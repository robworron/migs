import type { Metadata } from "next";

import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import GoogleReviews from "./components/GoogleReviews";

export const metadata: Metadata = {
  title: "John Mignelli | Chiropractor",
  description:
    "Dr. John Mignelli Chiropractic has been serving patients in Niagara Falls and Welland since 2022 providing wellness care and injury recovery while making lasting human connections.",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-12 lg:gap-36 w-full">
      <HeroSection />
      <ServicesSection />
      <GoogleReviews />
    </main>
  );
}

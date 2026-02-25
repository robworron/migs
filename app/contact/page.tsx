import { Metadata } from "next";
import ContactInfo from "../components/ContactInfo";
import FormSection from "../components/FormSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Both of John Mignelli’s treatment locations are equipped to direct bill and process WSIB or Motor Vehicle Claims in both Niagara Falls and Welland.",
};

export default function ContactPage() {
  return (
    <main className="w-full max-w-6xl min-h-screen mx-auto mt-12">
      <ContactInfo />
      <FormSection />
    </main>
  );
}

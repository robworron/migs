import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const lexend = Lexend({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "John Mignelli | Chiropractor",
    template: "%s | John Mignelli",
  },
  description:
    "Dr. John Mignelli Chiropractic has been serving patients in Niagara Falls and Welland since 2022 providing wellness care and injury recovery while making lasting human connections.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="flex flex-col min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

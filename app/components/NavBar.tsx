"use client";

import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";

const LINK_STYLES =
  "relative group flex items-center h-full px-1 py-2 transform-transition duration-300 hover:scale-110";

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 sticky z-50 flex justify-between w-full h-12 lg:h-16 px-4 lg:px-16 bg-[var(--background)] text-[var(--primary)] text-lg shadow-lg">
      <div className="relative h-full w-30">
        <Image
          src="/brand/logo.png"
          alt="John Mignelli Logo"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative flex gap-4 lg:gap-12 items-center">
        <Link href="/" className={LINK_STYLES}>
          Home
        </Link>
        <Link href="/about" className={LINK_STYLES}>
          About
        </Link>
        <div className={LINK_STYLES}>
          <span>Services</span>
          <div className="absolute top-full left-[-20] min-w-60 hidden group-hover:flex">
            <Dropdown />
          </div>
        </div>
        <Link href="/contact" className={LINK_STYLES}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

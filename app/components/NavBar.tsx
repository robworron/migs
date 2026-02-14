"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";

const LINK_STYLES =
  "relative group flex items-center h-full px-1 py-2 transform-transition duration-300 hover:scale-110";

export default function NavBar() {
  return (
    <nav className="flex justify-end w-full h-12 lg:h-16 px-4 lg:px-8 bg-[var(--primary)] text-white text-lg shadow-lg">
      <div className="relative flex gap-4 lg:gap-12 items-center">
        <Link href="/" className={LINK_STYLES}>
          Home
        </Link>
        <Link href="/about" className={LINK_STYLES}>
          About
        </Link>
        <div className={LINK_STYLES}>
          <span>Services</span>
          <div className="absolute top-full left-[-20] min-w-60 hidden group-hover:flex z-50">
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

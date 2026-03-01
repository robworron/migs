"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "../types";

import Dropdown from "./Dropdown";
import Burger from "./Burger";

const LINK_STYLES =
  "relative group flex items-center h-full px-1 py-2 transform-transition duration-300 hover:scale-110";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
  }

  function handleSubMenuClick() {
    setSubMenuOpen((prev) => !prev);
  }

  function closeMenus() {
    setMenuOpen(false);
    setSubMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full h-16 px-4 lg:px-16 bg-[var(--background)] text-[var(--primary)] text-lg shadow-lg">
      <Link
        href="/"
        className="relative h-[80%] lg:h-full w-30 lg:w-30 mx-auto md:mx-0"
      >
        <Image
          src="/brand/wordmark.webp"
          alt="John Mignelli Home"
          fill
          sizes="120px"
          className="object-contain"
        />
      </Link>
      <Burger menuOpen={menuOpen} onClick={handleMenuClick} />
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden absolute top-16 right-0 flex flex-col gap-4 pl-4 py-4 w-3/4 bg-[var(--background)] text-sm font-semibold shadow-xl"
          aria-label="Mobile Menu"
        >
          <Link href="/" onClick={closeMenus}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenus}>
            About
          </Link>
          <div className="flex flex-col">
            <button
              onClick={handleSubMenuClick}
              className="flex gap-1"
              aria-expanded={subMenuOpen}
              aria-controls="mobile-services-submenu"
            >
              Services
              <span
                className={`flex items-center text-xs ${subMenuOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              id="mobile-services-submenu"
              className={`flex flex-col gap-4 pl-4 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${subMenuOpen ? "max-h-100 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              {SERVICES.map((service, index) => (
                <Link key={index} href={service.href} onClick={closeMenus}>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" onClick={closeMenus}>
            Contact
          </Link>
        </nav>
      )}
      <nav aria-label="Main Navigation">
        <ul className="hidden relative md:flex gap-4 lg:gap-12 items-center">
          <li>
            <Link href="/" className={LINK_STYLES}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={LINK_STYLES}>
              About
            </Link>
          </li>
          <li className="relative group">
            <button className={LINK_STYLES}>Services</button>
            <ul className="absolute top-full left-[-20] min-w-60 hidden group-hover:flex">
              <Dropdown />
            </ul>
          </li>
          <li>
            <Link href="/contact" className={LINK_STYLES}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

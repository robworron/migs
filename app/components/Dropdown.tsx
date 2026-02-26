"use client";

import Link from "next/link";
import { SERVICES } from "../types";

export default function Dropdown() {
  return (
    <nav
      className="bg-white w-full max-w-sm font-semibold shadow-lg rounded-lg p-4"
      aria-label="Services Menu"
    >
      <ul className="flex flex-col">
        {SERVICES.map((service) => (
          <li
            key={service.name}
            className="py-3 border-t border-gray-300 first:border-none text-[var(--secondary)] text-base"
          >
            <Link
              href={service.href}
              className="block transition-transform duration-200 hover:translate-x-2 focus:translate-x-2"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

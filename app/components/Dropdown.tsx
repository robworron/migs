"use client";

import Link from "next/link";
import { SERVICES } from "../types";

export default function Dropdown() {
  return (
    <section className="bg-white w-full max-w-sm font-bold shadow-lg rounded-lg p-4">
      <ul className="flex flex-col gap-3">
        {SERVICES.map((service, index) => (
          <div key={index} className="flex flex-col gap-3">
            {index !== 0 && <hr className=" border-gray-300" />}
            <li className="transition-transform duration-200 hover:translate-x-2">
              <Link href={service.url}>{service.name}</Link>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}

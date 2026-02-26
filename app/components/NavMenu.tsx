import Link from "next/link";
import { SERVICES } from "../types";

export default function NavMenu() {
  return (
    <div className="flex flex-col items-center p-8 max-w-xs">
      <h3 className="text-xl font-semibold">All Services</h3>
      <div className="w-4/5 h-1 bg-[var(--accent)] mt-1 mb-3" />
      <nav aria-label="Services Menu">
        <ul className="flex flex-col gap-2">
          {SERVICES.map((service) => (
            <li key={service.name} className="h-full">
              <Link
                href={service.href}
                className="block transform-transform hover:text-[var(--primary)] hover:translate-x-2 duration-200"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

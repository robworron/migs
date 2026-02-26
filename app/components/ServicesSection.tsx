import ServiceCard from "./ServiceCard";
import { SERVICES } from "../types";

export default function ServicesSection() {
  return (
    <section className="flex justify-center items-center w-full h-auto px-4 py-8 md:p-8 bg-[var(--foreground)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {SERVICES.map(
          (service, index) =>
            index < 8 && (
              <div
                key={index}
                className="w-32 h-48 lg:w-48 lg:h-72 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <ServiceCard
                  title={service.name}
                  href={service.href}
                  imageSrc={service.imageSrc}
                />
              </div>
            ),
        )}
      </div>
    </section>
  );
}

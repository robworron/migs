import Image from "next/image";
import Button from "./Button";

type WorkplaceInfoProps = {
  name: string;
  address: string;
  postalCode: string;
  phone: string;
  fax?: string;
  email: string;
  website: string;
  bookingURL?: string;
  imageSrc: string;
  imageAlt: string;
};

export default function WorkplaceInfo({
  name,
  address,
  postalCode,
  phone,
  fax,
  email,
  website,
  bookingURL,
  imageSrc,
  imageAlt,
}: WorkplaceInfoProps) {
  return (
    <section className="flex flex-col gap-4 justify-center md:justify-start lg:justify-center items-center w-full min-h-80 md:h-[480px] lg:h-auto p-4 bg-[var(--foreground)] md:opacity-80 md:transition-transform md:duration-200 md:hover:scale-105 md:hover:opacity-100">
      <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
        <div className="relative lg:flex-2 w-full h-48">
          <Image src={imageSrc} alt={imageAlt} fill />
        </div>
        <div className="w-full lg:flex-3">
          <h5 className="lg:h-16 mb-2 text-xl md:text-2xl font-semibold">
            {name}
          </h5>
          <div className="text-sm">
            <p>{address}</p>
            <p>{postalCode}</p>
            <a href={website}>{website}</a>
            <p className="my-2">{email}</p>
            <p>Phone: {phone}</p>
            {fax && <p>Fax: {fax}</p>}
          </div>
        </div>
      </div>
      {bookingURL && (
        <a
          href={bookingURL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[var(--primary)] hover:bg-linear-to-b hover:from-[var(--primary)] hover:to-[var(--secondary)] text-[var(--background)] text-sm md:text-base rounded-3xl transition-colors duration-300"
        >
          Book Now
        </a>
      )}
    </section>
  );
}

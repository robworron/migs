import Image from "next/image";

type WorkplaceInfoProps = {
  name: string;
  address: string;
  postalCode: string;
  phone: string;
  fax?: string;
  email: string;
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
  imageSrc,
  imageAlt,
}: WorkplaceInfoProps) {
  return (
    <section className="flex gap-4 w-full p-4">
      <div className="relative flex-4 w-full h-64">
        <Image src={imageSrc} alt={imageAlt} fill />
      </div>
      <div className="flex-3">
        <h5 className="h-16 mb-2 text-2xl font-semibold">{name}</h5>
        <div>
          <p>{address}</p>
          <p>{postalCode}</p>
          <p className="my-2">{email}</p>
          <p>Phone: {phone}</p>
          {fax && <p>Fax: {fax}</p>}
        </div>
      </div>
    </section>
  );
}

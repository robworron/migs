"use client";

import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  title?: string;
  href?: string;
  imageSrc?: string;
};

export default function ServiceCard({
  title = "Service Title",
  imageSrc = "/temp1.png",
  href = "/",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="relative flex flex-col justify-center text-center w-full h-full shadow-xl rounded-xl overflow-hidden"
    >
      <Image
        fill
        src={imageSrc}
        alt="Service Image"
        className="object-cover brightness-45"
      />
      <article className="relative z-10 p-4">
        <h6 className="text-white font-semibold">{title}</h6>
      </article>
    </Link>
  );
}

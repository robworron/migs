"use client";

import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  title?: string;
  imageSrc?: string;
  url?: string;
};

export default function ServiceCard({
  title = "Service Title",
  imageSrc = "/temp1.png",
  url = "/about",
}: ServiceCardProps) {
  return (
    <Link
      href={url}
      className="relative flex flex-col justify-center text-center w-24 h-48 shadow-xl rounded-xl overflow-hidden transform-transition duration-300 hover:scale-110"
    >
      <Image
        fill
        src={imageSrc}
        alt="Service Image"
        className="object-cover brightness-45"
      />
      <article className="relative z-10 p-4">
        <h4 className="text-white font-semibold">{title}</h4>
      </article>
    </Link>
  );
}

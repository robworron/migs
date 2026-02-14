"use client";

import Link from "next/link";
import Button from "./Button";

export default function LandingButtons() {
  return (
    <div className="flex gap-4">
        <Link href="/about">
            <Button label="Read More" />
        </Link>
        <Link href="/contact">
            <Button label="Book Now" />
        </Link>
    </div>
  );
}

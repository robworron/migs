"use client";

import Link from "next/link";
import Button from "./Button";

function handleReadMore() {
  console.log("Read More clicked");
}

function handleBookNow() {
  console.log("Book Now clicked");
}

export default function LandingButtons() {
  return (
    <div className="flex gap-4">
        <Link href="/about">
            <Button label="Read More" onClick={handleReadMore} />
        </Link>
        <Link href="/contact">
            <Button label="Book Now" onClick={handleBookNow} />
        </Link>
    </div>
  );
}

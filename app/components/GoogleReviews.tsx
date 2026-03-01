"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000); // load after 1s
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <div
      className="elfsight-app-7611b343-38fb-46cc-967e-4a442156b452"
      data-elfsight-app-lazy
    >
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </div>
  );
}

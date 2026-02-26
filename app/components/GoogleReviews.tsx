"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-7611b343-38fb-46cc-967e-4a442156b452"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}

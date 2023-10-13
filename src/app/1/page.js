import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      I rendered
      <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/page-home-hero.jpg"
        }
        fill
        sizes="100vw"
        quality={100}
        alt="Apartments Cover Image"
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
}

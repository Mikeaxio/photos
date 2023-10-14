"use client"
import { CldImage } from "next-cloudinary";
import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      I rendered
      <CldImage
      fill
      src="delete-min_ee9mtq"
      sizes="100vw"
      alt="Apartments Cover Image"
      />

      {/* <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/page-home-hero.jpg"
        }
        fill
        sizes="100vw"
        quality={100}
        alt="Apartments Cover Image"
        style={{ objectFit: "cover" }}
        priority={true}
      /> */}
    </div>
  );
}

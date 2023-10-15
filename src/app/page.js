"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  function cloudinaryLoader({ src, width, quality }) {
    const params = [
      "f_auto",
      "c_limit",
      `w_${width}`,
      `q_${quality || "auto"}`,
    ];
    return `https://newburypublic.s3.amazonaws.com/website/page-contact-cover.jpg`;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      I rende
      <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/del.jpg"
        }
        width={8660}
        height={5773}
        quality={100}
        sizes={8660}
        alt="Apartments Cover Image"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

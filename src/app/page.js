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
    <div style={{width: '100%', height: '100vh'}}>
      I rende
      <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/page-home-hero.jpg"
        }
        width={2121}
        height={1414}
        sizes="100vw"
        quality={100}
        alt="Apartments Cover Image"
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
}

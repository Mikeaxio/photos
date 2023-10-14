"use client";
import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/hero.jpg"

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
    <div>
      I rende
      <Image
        src={"https://newburypublic.s3.amazonaws.com/website/Hero-1177797403_adobespark+(1)_adobespark+(1).jpg"}
        fill={true}
        sizes="100vw"
        quality={100}
        alt="Apartments Cover Image"
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
}

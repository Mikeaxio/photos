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
  
          <img
        src="https://newburypublic.s3.amazonaws.com/website/page-home-hero.jpg"
        alt="react logo"
      />
    </div>
  );
}

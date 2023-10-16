"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      I rende
      <Image
      fill={true}
      src="https://d15jic88q0ym6f.cloudfront.net/website/Alabama-Shore-Pic.jpg"
      alt="Apartments Cover Image"

      />
    </div>
  );
}

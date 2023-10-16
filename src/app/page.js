"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      I rende
      <Image
      width={5000}
      height={3333}
      src="https://newburypublic.s3.amazonaws.com/website/Alabama-Shore-Pic.jpg"
      alt="Apartments Cover Image"

      />
    </div>
  );
}

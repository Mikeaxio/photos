"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      I rende
      <CldImage
      width={5000}
      height={3333}
      src="page-contact-cover_2_isvft4"
      alt="Apartments Cover Image"

      />
    </div>
  );
}

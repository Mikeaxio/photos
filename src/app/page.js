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
    return `https://res.cloudinary.com/ddkh2zp4m/image/upload/${params.join(",")}${src}`;
  }

  return (
    <div>
      I rendered
      <Image
        loader={cloudinaryLoader}
        src={
          "/iStock-1177797403_rrxzom"
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

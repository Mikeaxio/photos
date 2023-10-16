"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  function imgixLoader({ src, width, quality }) {
    const url = new URL(`https://newbury-887694351.imgix.net${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 70).toString())
    return url.href
  }
  return (

      <div >
        I rende
        <Image
        loader={imgixLoader}
          fill={true}
          src="/website/page-home-hero.jpg"
          alt="Apartments Cover Image"
          style={{ objectFit: "cover" }}
        />
      </div>

  );
}

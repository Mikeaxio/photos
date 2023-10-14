"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  function imgixLoader({ src, width, quality }) {
    const url = new URL(`https://example.com${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 50).toString())
    return url.href
  }

  return (
    <div>
      I rendered
      <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/page-home-hero.jpg"
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

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      I rendered
      <Image
        src={
          "https://newburypublic.s3.amazonaws.com/website/delete.jpg"
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

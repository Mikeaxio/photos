
import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {

  return (

      <div >
        I rende
        <Image
          fill={true}
          src="https://newburypublic.s3.amazonaws.com/generics/iStock-145155089.jpg"
          alt="Apartments Cover Image"
          style={{ objectFit: "cover" }}
          
        />
      </div>

  );
}

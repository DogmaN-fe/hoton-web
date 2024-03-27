"use client";

import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./photoSlider.module.css";

import slide_1 from "@/public/photoSlider/DSCF5964.png";
import slide_2 from "@/public/photoSlider/DSCF6023.png";
import slide_3 from "@/public/photoSlider/IMG_5706.png";
import slide_4 from "@/public/photoSlider/IMG_5726.png";
import slide_5 from "@/public/photoSlider/IMG_5737.png";
import slide_6 from "@/public/photoSlider/IMG_5747.png";
import slide_7 from "@/public/photoSlider/IMG_5755.png";
import slide_8 from "@/public/photoSlider/IMG_5768.png";
import slide_9 from "@/public/photoSlider/IMG_5783.png";
import slide_10 from "@/public/photoSlider/IMG_5788.png";

export default function PhotoSlider(): ReactElement {
  const images = [
    slide_1.src,
    slide_2.src,
    slide_3.src,
    slide_4.src,
    slide_5.src,
    slide_6.src,
    slide_7.src,
    slide_8.src,
    slide_9.src,
    slide_10.src,
  ];

  const [position, setPosition] = useState(45);

  const nextPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === -45) {
        return 45;
      } else {
        return prevPosition - 10;
      }
    });
  };

  const prevPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === 45) {
        return -45;
      } else {
        return prevPosition + 10;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.slider}>
      <button
        className={`${styles.slider_button} ${styles.slider_button_left}`}
        onClick={prevPhoto}
      >
        {"❰"}
      </button>
      <button
        className={`${styles.slider_button} ${styles.slider_button_right}`}
        onClick={nextPhoto}
      >
        {"❱"}
      </button>
      <div
        className={styles.slider_photos}
        style={{ transform: `translateX(${position}%)` }}
      >
        {images.map((image) => {
          return (
            <div key={image} className={styles.slider_photo}>
              <Image
                src={`${image}`}
                alt={`фото-${image}`}
                fill={true}
                rel="preload"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

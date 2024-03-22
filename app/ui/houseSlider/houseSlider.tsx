"use client";

import { ReactElement, useState } from "react";
import styles from "./houseSlider.module.css";

import slide_1 from "@/public/houseSlider/photo_5456615534658444602_y.jpg";
import slide_2 from "@/public/houseSlider/photo_5456615534658444603_y.jpg";
import CardHouse from "../cardHouse/cardHouse";
import { IHouseCard } from "@/app/lib/types";

export default function HouseSlider(): ReactElement {
  const houseCards: IHouseCard[] = [
    {
      photo: slide_1.src,
      title: "Юрта для двоих",
      description: {
        first:
          "Дом-юрта с панорамными окнами – это уникальное сочетание традиционного архитектурного стиля и современных технологий. Этот дом идеально подойдет для тех, кто хочет отдохнуть в гармонии с природой, но при этом не отказываться от комфорта.",
        second:
          "Юрта выполнена из экологичных материалов и имеет куполообразную форму, что обеспечивает хорошую вентиляцию и освещение. Панорамные окна позволяют наслаждаться красивыми видами на окружающую природу, не выходя из дома.",
        third:
          "Внутри юрты расположены все необходимые удобства для комфортного проживания. Здесь есть кухня-гостиная с современной техникой, спальня  и ванная комната. Также в доме есть видовая терраса с зоной для отдыха и потрясающим видом на город.",
      },
      roomType: "433998",
    },
    {
      photo: slide_2.src,
      title: "Четырехместная юрта",
      description: {
        first:
          "Дом-юрта с панорамными окнами станет отличным выбором для тех, кто ищет уютное и стильное место уединения от шумного города. Он идеально подойдет для семей с детьми, так как обеспечивает много пространства и света.",
        second:
          "Стильные видовые дома с панорамными окнами и верандами. Оснащены всем необходимым для комфортного проживания: кухня, ванная комната, кухня-гостиная, спальня с кроватью king-size,детская комната с раздельными кроватями, дом оснащен телевизором и кондиционером.  ",
      },
      roomType: "433999",
    },
  ];

  const [position, setPosition] = useState(25);

  const [touchStartX, setTouchStartX] = useState(25);
  const [touchEndX, setTouchEndX] = useState(25);

  const nextHouse = () => {
    setPosition((prevPosition) => {
      if (prevPosition === -25) {
        return -25;
      } else {
        return prevPosition - 50;
      }
    });
  };

  const prevHouse = () => {
    setPosition((prevPosition) => {
      if (prevPosition === 25) {
        return 25;
      } else {
        return prevPosition + 50;
      }
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextHouse();
    } else if (diff < -50) {
      prevHouse();
    }
  };

  return (
    <section id="house" className={styles.slider}>
      <div
        className={styles.slider_house_cards}
        style={{ transform: `translateX(${position}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {houseCards.map((houseCard) => {
          return (
            <CardHouse
              key={houseCard.title}
              photo={houseCard.photo}
              title={houseCard.title}
              description={houseCard.description}
              roomType={houseCard.roomType}
            />
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.slider_button}`} onClick={prevHouse}>
          {"←"}
        </button>
        <button className={`${styles.slider_button}`} onClick={nextHouse}>
          {"→"}
        </button>
      </div>
    </section>
  );
}

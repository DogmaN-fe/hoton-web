"use client";

import { ReactElement, useState } from "react";
import styles from "./houseSlider.module.css";

import slide_1 from "@/public/houseSlider/photo_5456615534658444602_y.png";
import slide_2 from "@/public/houseSlider/photo_5456615534658444603_y.png";
import CardHouse from "../cardHouse/cardHouse";
import { IHouseCard } from "@/app/lib/types";

export default function HouseSlider(): ReactElement {
  const houseCards: IHouseCard[] = [
    {
      photo: slide_1.src,
      title: "Юрта для двоих",
      description:
        "Аутентичные видовые дома с панорамными окнами и верандами. Оснащены всем необходимым для комфортного проживания: теплые полы и кондиционеры, видовая кухня-гостиная, спальня с кроватью king-size и телевизором.",
      roomType: "433998",
    },
    {
      photo: slide_2.src,
      title: "Четырехместная юрта",
      description:
        "Аутентичные видовые дома с панорамными окнами и верандами. Оснащены всем необходимым для комфортного проживания: теплые полы и кондиционеры, видовая кухня-гостиная, 2 спальни с кроватями king-size и спринбох, телевизор.",
      roomType: "433999",
    },
  ];

  const [position, setPosition] = useState(25);

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

  return (
    <section id="house" className={styles.slider}>
      <div
        className={styles.slider_house_cards}
        style={{ transform: `translateX(${position}%)` }}
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

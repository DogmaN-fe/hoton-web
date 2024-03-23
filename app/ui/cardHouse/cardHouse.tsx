import { ReactElement } from "react";
import Image from "next/image";
import styles from "./cardHouse.module.css";
import { IDescriptionForHouseCard } from "@/app/lib/types";
import PriceButton from "../priceButton/priceButton";

export default function CardHouse({
  photo,
  title,
  description,
  roomType,
}: {
  photo: string;
  title: string;
  description: IDescriptionForHouseCard;
  roomType: string;
}): ReactElement {
  return (
    <article
      className={styles.card}
      style={{
        background: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "100% 100%",
      }}
    >
      <div className={styles.darkness}>
        <div className={styles.card_info}>
          <h3 className={styles.card_info_title}>{title}</h3>
          <div className={styles.card_info_descriptions}>
            <p className={styles.card_info_description}>{description.first}</p>
            <p className={styles.card_info_description}>{description.second}</p>
            <p className={styles.card_info_description}>{description.third}</p>
          </div>
          <PriceButton roomType={roomType} />
        </div>
        <div className={styles.card_photo}>
          <Image src={photo} alt={`фото дома - ${photo}`} fill={true} />
        </div>
      </div>
    </article>
  );
}

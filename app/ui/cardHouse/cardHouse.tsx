import { ReactElement } from "react";
import Image from "next/image";
import PriceButton from "../priceButton/priceButton";
import styles from "./cardHouse.module.css";
import { IDescriptionForHouseCard } from "@/app/lib/types";

export default function CardHouse({
  photo,
  title,
  description,
}: {
  photo: string;
  title: string;
  description: IDescriptionForHouseCard;
}): ReactElement {
  return (
    <article
      className={styles.card}
      style={{ background: `url(${photo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', WebkitBackgroundSize:'100% 100%'}}
    >
      <div className={styles.darkness}>
        <div className={styles.card_info}>
          <h3 className={styles.card_info_title}>{title}</h3>
          <p className={styles.card_info_description}>{description.first}</p>
          <p className={styles.card_info_description}>{description.second}</p>
          <p className={styles.card_info_description}>{description.third}</p>
          <PriceButton />
        </div>
        <div className={styles.card_photo}>
          <Image
            src={photo}
            alt={`фото дома - ${photo}`}
            fill={true}
          />
        </div>
      </div>
    </article>
  );
}

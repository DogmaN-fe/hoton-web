import { ReactElement } from "react";
import styles from "./conceptSection.module.css";
import BookingButton from "../bookingButton/bookingButton";

export default function ConceptSection(): ReactElement {
  return (
    <section id="concept" className={styles.concept}>
      <div className={styles.concept_block}>
        <h2 className={styles.concept_concept_description_title}>
          Место силы и комфорта в окружении цветущей степи.{" "}
        </h2>
        <p className={styles.concept_description}>
          Уникальное место для перезагрузки отдыха душой и телом
        </p>
        <BookingButton className={styles.concept_booking_button} />
      </div>
    </section>
  );
}

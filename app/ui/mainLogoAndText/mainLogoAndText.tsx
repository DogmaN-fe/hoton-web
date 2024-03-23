import mainLogo from "@/public/Logo.jpg";
import styles from "./mainLogoAndText.module.css";
import { ReactElement } from "react";
import BookingButton from "../bookingButton/bookingButton";
import ExportedImage from "next-image-export-optimizer";

export default function MainLogoAndText(): ReactElement {
  return (
    <section className={styles.main_logo_section}>
      <div className={styles.main_logo_section_position}>
        <ExportedImage 
          className={styles.main_logo_img}
          src={mainLogo}
          width={350}
          height={300}
          alt={"Логотип"}
        />

        <h1 className={styles.main_logo_title}>
          Хотон Глэмпинг – погружение в колорит степной природы при высоком
          уровне сервиса
        </h1>

        <BookingButton className={styles.main_logo_button} />
      </div>
    </section>
  );
}

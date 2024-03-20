import { ReactElement } from "react";
import styles from "./contacsSection.module.css";
import Link from "next/link";
import Image from "next/image";

import address from "@/public/map_locator_vjwun2hnpw3r.svg";
import phone from "@/public/telephone_4f8o74njmimn.svg";
import mail from "@/public/mail_qbewr5yvdo6s.svg";

export default function ContacsSection(): ReactElement {
  return (
    <section id="contacs" className={styles.contacs_section}>
      <div className={styles.contacs}>
        <h4 className={styles.contacs_title}>Наш адрес:</h4>
        <span className={styles.position}>
          <Image src={address} alt="иконка локатора" width={16} height={16} />
          <p className={styles.contacs_address}>
            Республика Калмыкия, Элиста, Восточный район
          </p>
        </span>
        <span className={styles.position}>
          <Image src={mail} alt="иконка локатора" width={16} height={16} />
          <Link
            className={styles.contacs_mail}
            href="mailto:mail@arshanglamping.ru"
          >
            mail@arshanglamping.ru
          </Link>
        </span>
        <span className={styles.position}>
          <Image src={phone} alt="иконка локатора" width={16} height={16} />
          <Link className={styles.contacs_phone} href={"tel:+79881562861"}>
            +7 (988) 156-28-61
          </Link>
        </span>
      </div>
      <div className={styles.map}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <a
            href="https://yandex.ru/maps/org/khoton/243050913747/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0",
            }}
          >
            Хотон
          </a>
          <a
            href="https://yandex.ru/maps/1094/elista/category/glamping/112956978208/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Глэмпинг в Элисте
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=44.329975%2C46.300303&mode=search&oid=243050913747&ol=biz&sll=44.309186%2C46.300303&sspn=0.179447%2C0.070026&text=%D1%85%D0%BE%D1%82%D0%BE%D0%BD&z=13.44"
            allowFullScreen={true}
            style={{ position: "relative", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

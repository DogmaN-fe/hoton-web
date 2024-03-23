import Image from "next/image";
import Link from "next/link";
import logo from "@/public/yurt_cbxgxznwt725.svg";
import styles from "./navigationLogo.module.css";
import { ReactElement } from "react";

export default function NavigationLogo(): ReactElement {
  return (
    <Link className={styles.logo} href={"/"}>
      <Image
        src={logo}
        priority={true}
        alt={"Логотип"}
        fill={true}
      />
    </Link>
  );
}

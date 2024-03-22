"use client";

import { ReactElement } from "react";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function Page(): ReactElement {
  const router = useSearchParams();
  const roomType = router.get("room-type");
  let address = `https://reservationsteps.ru/rooms/index/aea23486-a63a-4e1d-802c-0d24d26a0608`;
  


  return (
    <main className={styles.main}>
      <iframe width={"95%"} height={900} src={address}></iframe>
    </main>
  );
}

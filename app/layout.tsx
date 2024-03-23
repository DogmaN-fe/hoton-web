import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./lib/fonts";
import styles from "@/app/layout.module.css";
import Link from "next/link";
import NavigationLogo from "./ui/navigationLogo/navigationLogo";
import Navigation from "./ui/navigation/navigation";
import MainLogoAndText from "./ui/mainLogoAndText/mainLogoAndText";
import ContacsSection from "./ui/contacsSection/contacsSection";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Хотон Глэмпинг | Погружение в колорит природы",
  description:
    "Аршан-Хотон Глэмпинг – погружение в колорит степной природы при высоком уровне сервиса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
      <link rel="icon" href="@/public/yurt_cbxgxznwt725.ico" sizes="any" />
      </Head>
      <body className={roboto.className}>
        <header id="header" className={styles.header}>
          <div className={styles.header_navigation}>
            <NavigationLogo />
            <Navigation />
            <Link
              className={styles.header_navigation_phone}
              href={"tel:+79881562861"}
            >
              +7 (988) 156-28-61
            </Link>
          </div>
          <MainLogoAndText />
        </header>
        {children}
        <footer className={styles.footer}>
          <ContacsSection />
          <div id="partners" className={styles.footer_partners}>
            <p className={styles.footer_partners_title}>Наши партнеры:</p>
            <a href="#" className={styles.footer_partners_partner}>
              Аршан-глемпинг
            </a>
          </div>
          <div className={styles.footer_copyright_and_yaer}>
            <p className={styles.footer_copyright}>© Хотон-глэмпинг</p>
            <p className={styles.footer_year}>2024, Официальный сайт</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import "./globals.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: process.env.APP_NAME || "mdPages",
  description:
    process.env.APP_DESCRIPTION ||
    "Quickly create and deploy static markdown pages with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Link
            href="/"
            className={styles.logoContainer}
            aria-label="main page"
          >
            <Image
              src={logo}
              alt={"logo"}
              width={100}
              className={styles.logo}
            />
          </Link>
        </header>
        <section className={styles.content}>{children}</section>
        <footer className={styles.footer}>
          <span className={styles.attribution}>
            Created with <a href="https://github.com/mrkvon/mdpages">mdpages</a>
          </span>
        </footer>
      </body>
    </html>
  );
}

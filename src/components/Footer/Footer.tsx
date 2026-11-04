import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/carvalho-associados.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          className={styles.identity}
          href="#inicio"
          aria-label="Carvalho & Associados — voltar ao início"
        >
          <Image
            className={styles.logo}
            src={logo}
            alt=""
            width={246}
            height={126}
          />
        </Link>

        <address className={styles.address}>
          <span className={styles.copyright}>© Carvalho &amp; Associados</span>
          <a href="mailto:carvalho%26associados@gmail.com">
            carvalho&amp;associados@gmail.com
          </a>
          <a href="tel:+55674002-8922">+55 67 4002-8922</a>
          <span>3828 Piermont Dr NE, Albuquerque, NM 87111, EUA</span>
        </address>
      </div>
    </footer>
  );
}

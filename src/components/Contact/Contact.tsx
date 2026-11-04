import Image from "next/image";
import styles from "./Contact.module.css";

const phoneNumber = "+55 67 4002-8922";

export default function Contact() {
  return (
    <section
      id="contato"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.content}>
        <h2 id="contact-title" className={styles.title}>
          Fale com a nossa equipe
        </h2>

        <a
          className={styles.whatsapp}
          href="https://wa.me/556740028922"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.icon} aria-hidden="true">
            <Image src="/images/whatsapp.svg" alt="" width={60} height={60} />
          </span>

          <span>
            <strong>Entrar em contato:</strong>
            <span>{phoneNumber}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

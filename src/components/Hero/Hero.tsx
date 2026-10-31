import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.graphic} aria-hidden="true" />

      <div className={styles.container}>
        <p className={styles.eyebrow}>
          <span>Carvalho &amp; Associados</span>
          <span className={styles.separator}> — </span>
          <span>Advocacia Trabalhista e do Consumidor</span>
        </p>

        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            <span>Seus</span>
            <span>direitos.</span>
            <span>Nosso</span>
            <span>compromisso.</span>
          </h1>

          <p className={styles.description}>
            Atuação especializada em Direito Trabalhista e do Consumidor, com
            atendimento próximo e soluções jurídicas para você.
          </p>

          <a className={styles.cta} href="#areas-de-atuacao">
            Conheça nosso trabalho
          </a>
        </div>
      </div>
      {/* SVG da curva */}
      <svg
        className={styles.wave}
        viewBox="0 0 1280 274"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.desktopWave}
          d="M0 225 C427 117 853 4 1280 0 L1280 274 L0 274 Z"
        />
        <path
          className={styles.mobileWave}
          d="M0 239 C320 80 640 0 1280 0 L1280 274 L0 274 Z"
        />
      </svg>
    </section>
  );
}

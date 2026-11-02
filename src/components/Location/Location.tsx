import styles from "./Location.module.css";

const MAP_ADDRESS = "3828 Piermont Dr NE, Albuquerque, NM 87111";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`;

export default function Location() {
  return (
    <section className={styles.location} aria-labelledby="location-title">
      <picture className={styles.artwork}>
        <source
          media="(max-width: 700px)"
          srcSet="/images/location-shape-mobile.svg"
        />
        <img src="/images/location-shape-desktop.svg" alt="" />
      </picture>

      <div className={styles.content}>
        <h2 id="location-title" className={styles.title}>
          Venha nos conhecer.
        </h2>

        <div className={styles.layout}>
          <div className={styles.mapFrame}>
            <iframe
              className={styles.map}
              src={MAP_EMBED_URL}
              title={`Mapa de ${MAP_ADDRESS}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.details}>
            <div className={styles.copy}>
              <p>
                Após realizar seu agendamento, você receberá um e-mail de
                confirmação com todas as informações necessárias para o
                atendimento.
              </p>

              <p>
                Nós, da Carvalho &amp; Associados, estamos preparados para ouvir
                você, compreender suas necessidades e oferecer orientação
                jurídica com clareza, transparência e compromisso com seus
                direitos.
              </p>
            </div>

            <a
              className={styles.button}
              href="/agendamento"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

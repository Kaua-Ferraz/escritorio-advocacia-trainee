import styles from "./PracticeAreas.module.css";

const practiceAreas = [
  {
    title: "Direito civil",
    description:
      "Orientação e atuação em questões contratuais, indenizações, cobranças e relações do dia a dia.",
  },
  {
    title: "Direito do consumidor",
    description:
      "Defesa dos seus direitos em relações de consumo, cobranças indevidas e falhas na prestação de serviços.",
  },
  {
    title: "Consultoria jurídica",
    description:
      "Análise preventiva e orientação clara para você tomar decisões com mais segurança e tranquilidade.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="areas-de-atuacao"
      className={styles.section}
      aria-labelledby="practice-areas-title"
    >
      <div className={styles.content}>
        <h2 id="practice-areas-title" className={styles.title}>
          Os nossos serviços:
        </h2>

        <div className={styles.cards}>
          {practiceAreas.map((area) => (
            <article className={styles.card} key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

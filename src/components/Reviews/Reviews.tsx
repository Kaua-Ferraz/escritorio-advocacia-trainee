import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import { reviews, type Review } from "./reviewsData";

const reviewRows = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
  reviews.slice(6, 9),
];

type ReviewRowProps = {
  reviews: Review[];
  row: number;
};

function ReviewRow({ reviews: rowReviews, row }: ReviewRowProps) {
  const rowClassName = `${styles.track} ${styles[`trackRow${row}`]}`;

  return (
    <div className={styles.row}>
      <div className={rowClassName}>
        <div className={styles.cardGroup}>
          {rowReviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>

        <div className={styles.cardGroup} aria-hidden="true">
          {rowReviews.map((review) => (
            <ReviewCard review={review} key={`copy-${review.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className={styles.reviews} aria-labelledby="reviews-title">
      <div className={styles.intro}>
        <h2 id="reviews-title" className={styles.title}>
          A confiança de quem nos escolheu.
        </h2>
      </div>

      <div className={styles.stage}>
        <p className={styles.description}>
          Conheça as experiências de clientes que confiaram em nosso trabalho.
        </p>

        <div
          className={styles.carrossel}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Avaliações de clientes"
        >
          {reviewRows.map((rowReviews, index) => (
            <ReviewRow reviews={rowReviews} row={index + 1} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

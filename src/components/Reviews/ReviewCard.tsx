"use client";

import type { MouseEvent } from "react";
import type { Review } from "./reviewsData";
import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  review: Review;
};

const HOVER_SCALE = 1.055;
const SCREEN_MARGIN = 18;

function bringCardIntoView(card: HTMLElement) {
  const rect = card.getBoundingClientRect();
  const scaleExpansion = (rect.width * (HOVER_SCALE - 1)) / 2;
  const leftLimit = SCREEN_MARGIN + scaleExpansion;
  const rightLimit = window.innerWidth - SCREEN_MARGIN - scaleExpansion;
  let shift = 0;

  if (rect.left < leftLimit) {
    shift = leftLimit - rect.left;
  } else if (rect.right > rightLimit) {
    shift = rightLimit - rect.right;
  }

  card.style.setProperty("--hover-shift", `${shift}px`);
}

function resetCardPosition(card: HTMLElement) {
  card.style.setProperty("--hover-shift", "0px");
}

export default function ReviewCard({ review }: ReviewCardProps) {
  function handleMouseEnter(event: MouseEvent<HTMLElement>) {
    bringCardIntoView(event.currentTarget);
  }

  function handleMouseLeave(event: MouseEvent<HTMLElement>) {
    resetCardPosition(event.currentTarget);
  }

  return (
    <article
      className={styles.card}
      data-review-card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header className={styles.cardHeader}>
        <span className={styles.avatar} aria-hidden="true" />
        <h3 className={styles.name}>{review.name}</h3>
      </header>

      <blockquote className={styles.comment}>“{review.comment}”</blockquote>

      <div
        className={styles.rating}
        role="img"
        aria-label={`Avaliação: ${review.rating} de 5 estrelas`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            className={index < review.rating ? styles.star : styles.emptyStar}
            aria-hidden="true"
            key={index}
          >
            ★
          </span>
        ))}
      </div>
    </article>
  );
}

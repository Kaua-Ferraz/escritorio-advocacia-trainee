"use client";

import Image from "next/image";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { ABOUT_GALLERY_IMAGES } from "./AboutGalleryData";
import styles from "./AboutGallery.module.css";

const AUTO_PLAY_MS = 5000;

export default function AboutGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const totalImages = ABOUT_GALLERY_IMAGES.length;
  const activeImage = ABOUT_GALLERY_IMAGES[activeIndex];

  const stepImage = (offset: number) => {
    setActiveIndex((prev) => (prev + offset + totalImages) % totalImages);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isOpen || prefersReducedMotion) return;

    const timer = setInterval(() => stepImage(1), AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [isOpen, totalImages]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowLeft") stepImage(-1);
    if (e.key === "ArrowRight") stepImage(1);
  };

  return (
    <>
      <button
        type="button"
        className={styles.galleryButton}
        onClick={() => setIsOpen(true)}
        aria-label={`Abrir galeria. Imagem atual: ${activeImage.alt}`}
      >
        {ABOUT_GALLERY_IMAGES.map((image, index) => (
          <Image
            key={image.src.src}
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            className={`${styles.slide} ${
              index === activeIndex ? styles.activeSlide : ""
            }`}
            priority={index === 0}
          />
        ))}

        <span className={styles.galleryHint} aria-hidden="true">
          Clique para ampliar
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.nativeDialog}
        aria-label="Galeria de imagens do escritório"
        onClose={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className={styles.dialog}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Fechar galeria"
          >
            ×
          </button>

          <div className={styles.modalImageFrame}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 800px) 94vw, 1100px"
              className={styles.modalImage}
            />
          </div>

          <div className={styles.controls}>
            <button type="button" onClick={() => stepImage(-1)}>
              <span aria-hidden="true">←</span> Anterior
            </button>

            <span className={styles.counter} aria-live="polite">
              {activeIndex + 1} / {totalImages}
            </span>

            <button type="button" onClick={() => stepImage(1)}>
              Próxima <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
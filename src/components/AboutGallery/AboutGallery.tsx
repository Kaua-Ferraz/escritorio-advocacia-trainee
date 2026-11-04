"use client";

import Image from "next/image";
import {
  type MouseEvent,
  type RefObject,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ABOUT_GALLERY_IMAGES,
  type AboutGalleryImage,
} from "./AboutGalleryData";
import styles from "./AboutGallery.module.css";

const AUTO_PLAY_INTERVAL_MS = 5000;
const PREVIOUS_IMAGE_OFFSET = -1;
const NEXT_IMAGE_OFFSET = 1;

function getWrappedImageIndex(index: number) {
  const imageCount = ABOUT_GALLERY_IMAGES.length;
  return (index + imageCount) % imageCount;
}

function wasBackdropClicked(event: MouseEvent<HTMLDialogElement>) {
  const dialogBounds = event.currentTarget.getBoundingClientRect();

  return (
    event.clientX < dialogBounds.left ||
    event.clientX > dialogBounds.right ||
    event.clientY < dialogBounds.top ||
    event.clientY > dialogBounds.bottom
  );
}

type GalleryPreviewProps = {
  activeImageIndex: number;
  activeImage: AboutGalleryImage;
  openButtonRef: RefObject<HTMLButtonElement | null>;
  onOpen: () => void;
};

function GalleryPreview({
  activeImageIndex,
  activeImage,
  openButtonRef,
  onOpen,
}: GalleryPreviewProps) {
  return (
    <button
      ref={openButtonRef}
      type="button"
      className={styles.galleryButton}
      onClick={onOpen}
      aria-label={`Abrir galeria. Imagem atual: ${activeImage.alt}`}
    >
      {ABOUT_GALLERY_IMAGES.map((image, imageIndex) => {
        const isActiveImage = imageIndex === activeImageIndex;

        return (
          <Image
            key={image.src.src}
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            className={`${styles.slide} ${
              isActiveImage ? styles.activeSlide : ""
            }`}
            priority={imageIndex === 0}
          />
        );
      })}

      <span className={styles.galleryHint} aria-hidden="true">
        Clique para ampliar
      </span>
    </button>
  );
}

type GalleryDialogProps = {
  activeImageIndex: number;
  activeImage: AboutGalleryImage;
  dialogRef: RefObject<HTMLDialogElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void;
  onCancel: (event: SyntheticEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function GalleryDialog({
  activeImageIndex,
  activeImage,
  dialogRef,
  closeButtonRef,
  onBackdropClick,
  onCancel,
  onClose,
  onPrevious,
  onNext,
}: GalleryDialogProps) {
  return (
    <dialog
      ref={dialogRef}
      className={styles.nativeDialog}
      aria-label="Galeria de imagens do escritório"
      onCancel={onCancel}
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <div className={styles.dialog}>
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
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
          <button type="button" onClick={onPrevious}>
            <span aria-hidden="true">←</span> Anterior
          </button>

          <span className={styles.counter} aria-live="polite">
            {activeImageIndex + 1} / {ABOUT_GALLERY_IMAGES.length}
          </span>

          <button type="button" onClick={onNext}>
            Próxima <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function AboutGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const activeImage = ABOUT_GALLERY_IMAGES[activeImageIndex];

  function changeImageBy(offset: number) {
    setActiveImageIndex((currentIndex) =>
      getWrappedImageIndex(currentIndex + offset),
    );
  }

  function showPreviousImage() {
    changeImageBy(PREVIOUS_IMAGE_OFFSET);
  }

  function showNextImage() {
    changeImageBy(NEXT_IMAGE_OFFSET);
  }

  function openGallery() {
    setIsGalleryOpen(true);
  }

  function closeGallery() {
    setIsGalleryOpen(false);
  }

  function handleDialogCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault();
    closeGallery();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (wasBackdropClicked(event)) {
      closeGallery();
    }
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isGalleryOpen || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        getWrappedImageIndex(currentIndex + NEXT_IMAGE_OFFSET),
      );
    }, AUTO_PLAY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isGalleryOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (!isGalleryOpen) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    const buttonToRestoreFocus = openButtonRef.current;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleArrowNavigation(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((currentIndex) =>
          getWrappedImageIndex(currentIndex + PREVIOUS_IMAGE_OFFSET),
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((currentIndex) =>
          getWrappedImageIndex(currentIndex + NEXT_IMAGE_OFFSET),
        );
      }
    }

    document.addEventListener("keydown", handleArrowNavigation);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", handleArrowNavigation);
      buttonToRestoreFocus?.focus();
    };
  }, [isGalleryOpen]);

  return (
    <>
      <GalleryPreview
        activeImageIndex={activeImageIndex}
        activeImage={activeImage}
        openButtonRef={openButtonRef}
        onOpen={openGallery}
      />

      <GalleryDialog
        activeImageIndex={activeImageIndex}
        activeImage={activeImage}
        dialogRef={dialogRef}
        closeButtonRef={closeButtonRef}
        onBackdropClick={handleBackdropClick}
        onCancel={handleDialogCancel}
        onClose={closeGallery}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </>
  );
}

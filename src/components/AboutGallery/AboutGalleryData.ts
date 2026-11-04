import type { StaticImageData } from "next/image";
import balancaImage from "../../../public/images/escritorio-balanca.jpg";
import fachadaImage from "../../../public/images/escritorio.png";
import interiorImage from "../../../public/images/escritorio-interior.jpg";
import recepcaoImage from "../../../public/images/escritorio-recepcao.jpg";
import salaReuniaoImage from "../../../public/images/escritorio-sala-reuniao.jpg";

export type AboutGalleryImage = {
  src: StaticImageData;
  alt: string;
};

export const ABOUT_GALLERY_IMAGES: readonly AboutGalleryImage[] = [
  {
    src: fachadaImage,
    alt: "Fachada do escritório Carvalho & Associados",
  },
  {
    src: recepcaoImage,
    alt: "Recepção de um escritório de advocacia",
  },
  {
    src: salaReuniaoImage,
    alt: "Sala de reunião de um escritório de advocacia",
  },
  {
    src: interiorImage,
    alt: "Ambiente interno de um escritório de advocacia",
  },
  {
    src: balancaImage,
    alt: "Balança da justiça e martelo sobre uma mesa",
  },
];

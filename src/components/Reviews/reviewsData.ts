export type Review = {
  id: number;
  name: string;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Raim Santos",
    comment: "Moranguete abacatudo 67 42",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex",
    comment: "Tinha tacado fogo no escritório, eles me salvaram de ser preso",
    rating: 5,
  },
  {
    id: 3,
    name: "Verity",
    comment: "Me verifique...",
    rating: 5,
  },
  {
    id: 4,
    name: "Miguel",
    comment: "Processei meu chefe por me mandar trabalhar... e ganhei!",
    rating: 5,
  },
  {
    id: 5,
    name: "Borba",
    comment: "Eles me salvaram do trabalho escravo no Carrosel...",
    rating: 5,
  },
  {
    id: 6,
    name: "Perea",
    comment: "aranha",
    rating: 5,
  },
  {
    id: 7,
    name: "Monark",
    comment: "Fez o Igor devolver minha grana.",
    rating: 5,
  },
  {
    id: 8,
    name: "Issao",
    comment: "...eu tô ficando sem ideia para as reviews.",
    rating: 5,
  },
  {
    id: 9,
    name: "Pelé",
    comment: "Era melhor ver meu filme",
    rating: 5,
  },
];

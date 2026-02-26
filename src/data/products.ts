export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smash Classic",
    description: "Blend 160g, cheddar duplo e molho da casa.",
    price: 29.9,
    image: "/images/extras/classics.png",
    rating: 4.8,
    category: "Clássicos",
  },
  {
    id: 2,
    name: "Smash Bacon",
    description: "Blend 160g, bacon crocante e cheddar.",
    price: 34.9,
    image: "/images/extras/bacons.png",
    rating: 4.9,
    category: "Bacon",
  },
  {
    id: 100,
    name: "Coca-Cola Lata",
    description: "350ml gelada",
    price: 6.9,
    image: "/images/drinks/coca.png",
    rating: 4.7,
    category: "Bebidas",
  },
  {
    id: 101,
    name: "Guarana Antarcia Lata",
    description: "350ml gelada",
    price: 6.9,
    image: "/images/drinks/guarana.png",
    rating: 4.7,
    category: "Bebidas",
  },
  {
    id: 200,
    name: "Bacon Extra",
    description: "Porção extra de bacon crocante",
    price: 4.9,
    image: "/images/extras/bacon.png",
    rating: 4.8,
    category: "Adicionais",
  },
  {
    id: 201,
    name: "Cheddar Extra",
    description: "Porção extra de cheddar cremoso",
    price: 3.9,
    image: "/images/extras/cheddar.png",
    rating: 4.7,
    category: "Adicionais",
  },
];

import { Product, products } from "./product";

export interface Category {
  name: string;
  slug: string;
  products: Product[];
}

const categories = [
  {
    name: "Вино",
    slug: "wine",
    products,
  },
  { name: "Шампанское и игристое", slug: "champagne", products: [] },
  { name: "Виски", slug: "whiskey", products: [] },
  { name: "Коньяк", slug: "cognac", products: [] },
  { name: "Крепкие напитки", slug: "ksn", products: [] },
  { name: "Пиво", slug: "beer", products: [] },
  { name: "Вода", slug: "water", products: [] },
  { name: "Безалкогольные напитки", slug: "drinks", products: [] },
] satisfies Category[];

export async function all() {
  return categories;
}

export async function getBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

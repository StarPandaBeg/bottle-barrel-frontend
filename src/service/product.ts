import * as productApi from "@/api/product";

export const KEY = "product";

export interface Product extends productApi.Product {
  link: string;
}

function mapProduct(product: productApi.Product) {
  return { ...product, link: `/products/${product.slug}` } as Product;
}

export async function all() {
  const products = await productApi.all();
  return products.map(mapProduct);
}

export async function getById(id: number) {
  const product = await productApi.getById(id);
  if (!product) return null;
  return mapProduct(product);
}
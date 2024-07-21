import { all as allCategories } from "@/service/category";
import { all as allProducts } from "@/service/product";
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/+$/, "");

async function tryOrEmpty(
  callback: () => Promise<MetadataRoute.Sitemap>
): Promise<MetadataRoute.Sitemap> {
  try {
    return await callback();
  } catch {
    return [];
  }
}

async function categoriesSitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await allCategories();
  return categories.map((c) => ({
    url: `${BASE_URL}${c.link}`,
    lastModified: "2024-07-07",
    changeFrequency: "daily",
    priority: 0.5,
  }));
}

async function productsSitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await allProducts();

  return products.map((p) => ({
    url: `${BASE_URL}${p.link}`,
    lastModified: "2024-07-07",
    changeFrequency: "daily",
    priority: 0.8,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: BASE_URL,
      lastModified: "2024-07-07",
      changeFrequency: "daily",
      priority: 1,
    },
    ...(await tryOrEmpty(categoriesSitemap)),
    ...(await tryOrEmpty(productsSitemap)),
  ];
}

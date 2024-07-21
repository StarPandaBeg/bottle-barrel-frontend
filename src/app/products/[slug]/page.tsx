import RecentProductHandler from "@/components/products/recent-products";
import getQueryClient from "@/components/util/query-client";
import { KEY, Product, getBySlug } from "@/service/product";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CarouselSection from "./components/carousel-section";
import DescriptionSection from "./components/description-section";
import PriceSection from "./components/price-section";
import ProductSection from "./components/product-section";
import RecentSection from "./components/recent-section";

interface ProductViewPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProductViewPageProps): Promise<Metadata> {
  const product = await getBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    openGraph: {
      title: `${product.name} - Купить в интернет-магазине алкоголя Bottle & Barrel`,
      images: product.images?.[0] ?? undefined,
    },
  };
}

export default async function ProductViewPage({
  params,
}: ProductViewPageProps) {
  const queryClient = getQueryClient();
  const queryKey = [KEY, params.slug];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getBySlug(params.slug),
  });

  const productData = queryClient.getQueryData<Product | null>(queryKey);
  if (!productData) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecentProductHandler productId={productData.id} />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr_1fr] md:gap-8">
          <CarouselSection slug={params.slug} />
          <ProductSection slug={params.slug} attributesAnchor="#attributes" />
          <PriceSection slug={params.slug} />
        </div>
        <DescriptionSection slug={params.slug} id="attributes" />
        <RecentSection slug={params.slug} />
      </div>
    </HydrationBoundary>
  );
}

import { clientConfig } from "@/lib/react-query";
import { Category, KEY, getBySlug } from "@/service/category";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogContent from "./components/catalog-content";
import CatalogFilters from "./components/catalog-filters";

interface CatalogCategoryViewProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: CatalogCategoryViewProps): Promise<Metadata> {
  const queryClient = new QueryClient(clientConfig);
  const queryKey = [KEY, params.slug];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getBySlug(params.slug),
  });

  const categoryData = queryClient.getQueryData(queryKey) as Category;
  if (categoryData === null) return {};

  return {
    title: categoryData.name,
  };
}

export default async function CatalogCategoryView({
  params,
}: CatalogCategoryViewProps) {
  const queryClient = new QueryClient(clientConfig);
  const queryKey = [KEY, params.slug];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getBySlug(params.slug),
  });

  const categoryData = queryClient.getQueryData(queryKey);
  if (categoryData === null) notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CatalogFilters slug={params.slug} />
        <CatalogContent slug={params.slug} />
      </HydrationBoundary>
    </div>
  );
}

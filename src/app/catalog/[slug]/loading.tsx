import ProductCardSkeleton from "@/components/products/product-card-skeleton";
import CardList from "@/components/ui/card-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function CatalogCategoryViewLoading() {
  const cards = [...Array(8)];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
      <section></section>
      <section className="flex flex-col gap-4">
        <div className="space-y-2">
          <Skeleton className="w-32 h-8" />
          <p className="text-sm font-light text-black/80">
            Мы нашли для Вас 0 напитков
          </p>
        </div>
        <CardList items={cards} itemBase={ProductCardSkeleton} />
      </section>
    </div>
  );
}

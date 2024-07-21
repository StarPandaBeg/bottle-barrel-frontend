import ProductCardSkeleton from "@/components/products/product-card-skeleton";
import CardList from "@/components/ui/card-list";

export default function WishlistLoadingPage() {
  const cards = [...Array(3)];

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Избранные товары</h1>
      <CardList items={cards} itemBase={ProductCardSkeleton} />
    </div>
  );
}

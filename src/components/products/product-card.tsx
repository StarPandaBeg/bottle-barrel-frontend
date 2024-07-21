import { KEY, getById } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import BaseCard, {
  type ProductCardProps as BaseProps,
} from "./product-card-base";
import ProductCardSkeleton from "./product-card-skeleton";

export interface ProductCardProps extends Omit<BaseProps, "item"> {
  item: number;
}

export default function ProductCard({ item, ...props }: ProductCardProps) {
  const { data, isLoading } = useQuery({
    queryKey: [KEY, item],
    queryFn: () => getById(item),
  });

  if (isLoading) return <ProductCardSkeleton />;
  return <BaseCard item={data!} {...props} />;
}

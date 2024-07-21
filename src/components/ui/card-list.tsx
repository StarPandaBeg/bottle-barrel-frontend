import { cn } from "@/lib/util";
import { ComponentType, HTMLAttributes, Key } from "react";

type WithOptionalItem<T> = T extends { item: infer U } ? { item: U } : T;

export interface CardListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[];
  itemBase: ComponentType<WithOptionalItem<{ item: T }>>;
  itemKey?: (item: T) => Key | null;
}

export default function CardList<T>({
  items,
  itemBase: ItemBase,
  itemKey,
  className,
  ...props
}: CardListProps<T>) {
  const elementClass =
    "grid grid-cols-1 justify-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  return (
    <ul className={cn(elementClass, className)} {...props}>
      {items.map((item, i) => (
        <li key={itemKey?.(item) ?? i}>
          <ItemBase item={item} />
        </li>
      ))}
    </ul>
  );
}

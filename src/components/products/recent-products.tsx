"use client";

import useRecentProducts from "@/hooks/use-recent-products";
import { ReactNode, useEffect } from "react";
import { useAppStore } from "../providers/zustand";
import CardList, { CardListProps } from "../ui/card-list";
import ProductCard from "./product-card";

export interface RecentProductListProps
  extends Omit<CardListProps<number>, "items" | "itemBase"> {
  exclude?: number | number[];
  listEmptyPlaceholder?: ReactNode;
}

export function RecentProductList({
  exclude = [],
  listEmptyPlaceholder: ListEmptyPlaceholder,
  ...props
}: RecentProductListProps) {
  const recent = useRecentProducts(exclude);
  if (recent.length === 0 && ListEmptyPlaceholder) return ListEmptyPlaceholder;
  return <CardList {...props} items={recent} itemBase={ProductCard} />;
}

export default function RecentProductHandler({
  productId,
}: {
  productId: number;
}) {
  const addToRecent = useAppStore((store) => store.addToRecent);
  useEffect(() => {
    addToRecent(productId);
  }, [productId, addToRecent]);
  return null;
}

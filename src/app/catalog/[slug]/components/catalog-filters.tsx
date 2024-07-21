"use client";

import { HTMLAttributes } from "react";

export interface CatalogFiltersProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function CatalogFilters({
  slug,
  ...props
}: CatalogFiltersProps) {
  return <section></section>;
}

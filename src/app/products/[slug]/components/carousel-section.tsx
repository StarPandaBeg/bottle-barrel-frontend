"use client";

import LoadingError from "@/components/loading/loading-error";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumbnailItem,
  CarouselThumbnails,
} from "@/components/ui/carousel";
import { KEY, getBySlug } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { HTMLAttributes, useMemo } from "react";

export interface CarouselSectionProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function CarouselSection({
  slug,
  ...props
}: CarouselSectionProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY, slug],
    queryFn: () => getBySlug(slug),
  });
  const products = useMemo(
    () => data!.images ?? ["/images/placeholders/product.png"],
    [data]
  );

  if (isError) return <LoadingError />;
  if (isLoading) return <></>;

  return (
    <section {...props}>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {products.map((src, i) => (
            <CarouselItem key={i}>
              <Image
                src={src}
                alt=""
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {products.length > 1 && (
          <CarouselThumbnails>
            {products.map((src, i) => (
              <CarouselThumbnailItem key={i}>
                <Image
                  src={src}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-auto"
                />
              </CarouselThumbnailItem>
            ))}
          </CarouselThumbnails>
        )}
      </Carousel>
    </section>
  );
}

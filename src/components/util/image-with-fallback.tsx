import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string | StaticImport | null | undefined;
  fallbackSrc: string | StaticImport;
}

export default function ImageWithFallback({
  alt,
  src,
  fallbackSrc,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc ?? fallbackSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...props}
    />
  );
}

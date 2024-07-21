import { cn } from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import Image, { ImageProps } from "next/image";

const brandVariants = cva("", {
  variants: {
    recolor: {
      default: "",
      white: "[filter:contrast(0)_brightness(2)]",
    },
  },
  defaultVariants: {
    recolor: "default",
  },
});

export interface BrandProps
  extends Omit<ImageProps, "src" | "alt">,
    VariantProps<typeof brandVariants> {
  adaptive?: boolean;
}

export default function Brand({
  adaptive,
  recolor,
  className,
  ...props
}: BrandProps) {
  const adaptiveStyle = adaptive ? "hidden md:block" : "";
  return (
    <>
      <Image
        className={cn(brandVariants({ recolor, className }), adaptiveStyle)}
        width={147}
        height={55.5}
        {...props}
        src="/images/brand/brand.png"
        alt="Bottle & Barrel"
      />
      {adaptive && (
        <Image
          className={cn(
            brandVariants({ recolor, className }),
            "block md:hidden"
          )}
          width={28.6}
          height={55.5}
          {...props}
          src="/images/brand/logo.png"
          alt="Bottle & Barrel"
        />
      )}
    </>
  );
}

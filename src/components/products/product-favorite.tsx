import useFavorite from "@/hooks/use-favorite";
import { cn } from "@/lib/util";
import { Heart } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Button, ButtonProps } from "../ui/button";

export interface ProductFavoriteButtonProps extends ButtonProps {
  productId: number;
}

export default function ProductFavoriteButton({
  productId,
  className,
  ...props
}: ProductFavoriteButtonProps) {
  const [isFavorite, setFavorite] = useFavorite(productId);
  const [heartBeat, setHeartbeat] = useState(false);

  const clickHandler = (e: MouseEvent) => {
    setHeartbeat(true);
    setFavorite(!isFavorite);
  };

  return (
    <Button
      variant="text"
      size="icon"
      title="Добавить в избранное"
      className={cn(
        "text-accent transition hover:scale-110 data-[beat=true]:animate-[heart-pulse_ease-in-out_0.5s]",
        className
      )}
      data-active={isFavorite}
      data-beat={heartBeat}
      {...props}
      onClick={clickHandler}
      onAnimationEnd={(e) => setHeartbeat(false)}
    >
      <Heart fill={isFavorite ? "hsl(var(--accent))" : "transparent"} />
    </Button>
  );
}

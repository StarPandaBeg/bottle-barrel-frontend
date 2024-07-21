import { cn } from "@/lib/util";
import { LucideProps } from "lucide-react";
import { HTMLAttributes } from "react";
import { LinkButton, LinkButtonProps } from "./button";

export interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}
export interface NavigationBarButtonProps extends LinkButtonProps {
  active?: boolean;
  icon: React.FC<LucideProps>;
  label: string;
  indicator?: string;
}

export function NavigationBar({ className, ...props }: NavigationBarProps) {
  return (
    <nav
      className={cn(
        "px-4 flex gap-2 border-t w-full bg-background fixed left-0 bottom-0 z-30",
        className
      )}
      {...props}
    />
  );
}

export function NavigationBarButton({
  icon: Icon,
  label,
  indicator,
  active,
  className,
  ...props
}: NavigationBarButtonProps) {
  return (
    <LinkButton
      variant="text"
      className={cn(
        "flex-grow flex-col h-14 text-black/50 data-[active=true]:text-primary",
        className
      )}
      data-active={active}
      {...props}
    >
      <div className="relative">
        <Icon strokeWidth={active ? 1.5 : 1} height={48} />
        {indicator && (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-light text-white bg-accent border-2 border-white rounded-full top-1 -end-2">
            {indicator}
          </div>
        )}
      </div>
      <p className="text-xs font-light">{label}</p>
    </LinkButton>
  );
}

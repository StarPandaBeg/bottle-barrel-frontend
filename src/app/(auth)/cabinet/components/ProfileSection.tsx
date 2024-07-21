"use client";

import { Button, LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/util";
import Image from "next/image";
import { HTMLAttributes } from "react";

export interface ProfileSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function ProfileSection({
  className,
  ...props
}: ProfileSectionProps) {
  return (
    <section className={cn("flex flex-col gap-2", className)} {...props}>
      <Image
        src="/images/placeholders/user.png"
        alt="Avatar"
        width={260}
        height={400}
        className="hidden rounded w-[184px] h-auto md:block lg:w-[260px]"
      />
      <Button variant="secondary">Редактировать</Button>
      <LinkButton
        href="/sign-out"
        prefetch={false}
        variant="secondary"
        onClick={(e) => window.location.reload()}
      >
        Выход
      </LinkButton>
    </section>
  );
}

import { LinkButton } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="py-4 flex flex-col items-center gap-2 text-center">
      <div className="flex justify-center items-center text-accent text-8xl">
        <span>4</span>
        <SearchX className="inline-block size-32" />
        <span>4</span>
      </div>
      <h1 className="text-2xl text-primary">Упс! Такой страницы нет.</h1>
      <p className="text-black/80">
        Но у нас есть{" "}
        <Link href="/" className="text-primary underline">
          другие!
        </Link>
      </p>
      <LinkButton href="/" className="mt-4">
        Продолжить покупки
      </LinkButton>
    </div>
  );
}

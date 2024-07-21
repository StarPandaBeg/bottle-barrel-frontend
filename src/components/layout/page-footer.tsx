import { all } from "@/api/category";
import Brand from "@/components/ui/brand";
import { cn } from "@/lib/util";
import { KEY } from "@/service/category";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import getQueryClient from "../util/query-client";
import FooterCategories from "./categories/footer-categories";

export interface FooterListProps extends HTMLAttributes<HTMLDivElement> {}
export interface PageFooterProps extends HTMLAttributes<HTMLDivElement> {}

function FooterInfo() {
  return (
    <section className="flex flex-col items-center text-center gap-4 text-sm font-light text-neutral-300 md:items-start md:text-start">
      <Link href="/">
        <Brand recolor="white" />
      </Link>
      <p className="max-w-80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div>
        <p className="text-neutral-400">Телефон:</p>
        <p className="text-lg">
          <a href="tel:+71234567890">+7 123 456-78-90</a>
        </p>
      </div>
      <div>
        <p className="text-neutral-400">
          E-Mail:{" "}
          <a className="text-neutral-300" href="mailto:info@bottlebarrel.ru">
            info@bottlebarrel.ru
          </a>
        </p>
      </div>
      <div>
        <p className="text-neutral-400">Мы в соцсетях:</p>
        <ul className="flex gap-4 pt-1">
          <li>
            <Link href="https://vk.com" target="_blank">
              <Image
                src="/images/icons/vk.svg"
                alt="vk"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="https://telegram.org" target="_blank">
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function FooterLinks(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <FooterList title="Клиентам" {...props}>
      <FooterListItem>
        <Link className="py-1" href="/err">
          О нас
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Программа лояльности
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Юридическая информация
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Обратная связь
        </Link>
      </FooterListItem>
      <FooterListItem>
        <Link className="py-1" href="/err">
          Сотрудничество
        </Link>
      </FooterListItem>
    </FooterList>
  );
}

export function FooterList({
  title,
  className,
  children,
  ...props
}: FooterListProps) {
  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h1 className="pb-1 w-full border-b-2 text-neutral-300 border-neutral-400/50 md:w-max">
        {title}
      </h1>
      <ul className="text-neutral-400">{children}</ul>
    </section>
  );
}

export function FooterListItem({
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("w-max  font-light hover:text-neutral-300", className)}
      {...props}
    />
  );
}

export default async function PageFooter({
  className,
  ...props
}: PageFooterProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  return (
    <footer
      className={cn(
        "px-4 py-8 pb-20 grid grid-cols-1 gap-4 bg-primary border-t-4 border-accent md:grid-cols-3 md:pb-8",
        className
      )}
      {...props}
    >
      <FooterInfo />
      <FooterCategories />
      <FooterLinks />
    </footer>
  );
}

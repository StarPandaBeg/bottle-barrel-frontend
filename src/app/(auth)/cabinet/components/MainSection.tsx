"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAuthRedirect from "@/hooks/use-auth-redirect";
import { cn } from "@/lib/util";
import { HTMLAttributes } from "react";
import ProfileInfo from "./ProfileInfo";
import { RecentOrdersTable } from "./RecentOrdersTable";

export interface MainSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function MainSection({ className, ...props }: MainSectionProps) {
  useAuthRedirect(false, "/");

  return (
    <section className={cn("flex flex-col gap-4", className)} {...props}>
      <Tabs defaultValue="orders" className="w-full">
        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
          <div className="flex items-center gap-2">
            <Avatar className="inline-flex md:hidden">
              <AvatarImage src="/images/placeholders/user.png" />
            </Avatar>
            <h1 className="inline font-semibold text-2xl">
              Привет, StarPanda!
            </h1>
          </div>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="info">Обо мне</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="orders" className="py-2">
          <div className="space-y-2">
            <h2 className="text-sm text-black/60">Вот твои недавние заказы:</h2>
            <RecentOrdersTable />
          </div>
        </TabsContent>
        <TabsContent value="info" className="py-2">
          <ProfileInfo />
        </TabsContent>
      </Tabs>
    </section>
  );
}

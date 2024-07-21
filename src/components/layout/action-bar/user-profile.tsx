"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { me } from "@/service/auth";
import { useQuery } from "@tanstack/react-query";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { ActionBarButton } from "./action-bar-buttons";

export default function UserProfile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: () => me(),
  });

  if (isLoading) {
    return (
      <ActionBarButton
        icon={User}
        label="Загрузка.."
        className="text-black/30 pointer-events-none"
      />
    );
  }
  if (isError) {
    return (
      <ActionBarButton
        icon={User}
        label="Ошибка"
        className="text-red-500 cursor-pointer"
        title="Нажмите для перезагрузки"
        onClick={(e) => window.location.reload()}
      />
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ActionBarButton icon={User} label="Профиль" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data!.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/cabinet">
            <User className="mr-2 h-4 w-4" />
            <span>Личный кабинет</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/sign-out"
            prefetch={false}
            onClick={(e) => window.location.reload()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выход</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

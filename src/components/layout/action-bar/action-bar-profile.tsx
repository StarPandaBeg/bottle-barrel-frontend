"use client";

import SignInDialog from "@/components/auth/sign-in-dialog";
import useAuth from "@/hooks/use-auth";
import { User } from "lucide-react";
import { useState } from "react";
import { ActionBarButton } from "./action-bar-buttons";
import UserProfile from "./user-profile";

export default function ActionBarProfile() {
  const [open, setOpen] = useState(false);
  const authData = useAuth();

  if (authData !== undefined) return <UserProfile />;

  return (
    <>
      <SignInDialog open={open} onOpenChange={setOpen} />
      <ActionBarButton
        icon={User}
        label="Войти"
        onClick={(e) => setOpen(true)}
      />
    </>
  );
}

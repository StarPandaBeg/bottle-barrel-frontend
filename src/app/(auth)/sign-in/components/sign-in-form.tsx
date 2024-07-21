"use client";

import SignInFormLogic from "@/components/auth/sign-in-form";
import { useToast } from "@/components/ui/use-toast";
import useAuthRedirect from "@/hooks/use-auth-redirect";

export default function SignInForm() {
  useAuthRedirect(true, "/");
  const { toast } = useToast();

  const successHandler = () => {
    toast({ title: "Добро пожаловать!" });
    window.location.replace("/");
  };

  return <SignInFormLogic onSuccess={successHandler} />;
}

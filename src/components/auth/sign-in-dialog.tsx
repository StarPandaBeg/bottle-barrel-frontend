"use client";

import { DialogProps } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import { AuthError } from "./actions";
import SignInForm from "./sign-in-form";

export interface SignInDialogProps extends DialogProps {}

export default function SignInDialog({
  children,
  ...props
}: SignInDialogProps) {
  const { toast } = useToast();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const successHandler = () => {
    toast({ title: "Добро пожаловать!" });
    triggerRef.current?.click();
    window.location.reload();
  };
  const failHandler = (error: AuthError) => {
    toast({ variant: "destructive", title: "Неправильный логин и/или пароль" });
  };

  return (
    <Dialog {...props}>
      <DialogTrigger ref={triggerRef}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="items-center gap-4">
          <Image src="/images/flat/1.jpg" alt="" width={256} height={256} />
          <DialogTitle className="text-2xl text-primary">
            Вход в личный кабинет
          </DialogTitle>
        </DialogHeader>
        <SignInForm onSuccess={successHandler} onFail={failHandler} />
      </DialogContent>
    </Dialog>
  );
}

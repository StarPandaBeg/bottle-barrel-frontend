"use client";

import signInForm, { SignInData } from "@/lib/forms/sign-in";
import { getFormData } from "@/lib/util";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { AuthError, signIn } from "./actions";

export interface SignInFormProps {
  onSuccess?: () => void;
  onFail?: (error: AuthError) => void;
}

export default function SignInForm(props: SignInFormProps) {
  const form = useForm<SignInData>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    const formData = getFormData(data);
    const result = await signIn(formData);

    if (result[0]) props.onSuccess?.();
    else props.onFail?.(result[1]!);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={fieldState.error && "border-red-500"}
                  placeholder="Электронная почта"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={fieldState.error && "border-red-500"}
                  type="password"
                  placeholder="Пароль"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          Вход
        </Button>
      </form>
    </Form>
  );
}

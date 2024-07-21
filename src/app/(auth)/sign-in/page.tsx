import { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./components/sign-in-form";

export const metadata: Metadata = {
  title: "Вход на сайт",
};

export default function SignInPage() {
  return (
    <div className="py-10 flex flex-col items-center gap-4">
      <Image src="/images/flat/1.jpg" alt="" width={256} height={256} />
      <h1 className="text-xl font-bold">Вход в личный кабинет</h1>
      <SignInForm />
    </div>
  );
}

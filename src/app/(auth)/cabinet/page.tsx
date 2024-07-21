import { Metadata } from "next";
import MainSection from "./components/MainSection";
import ProfileSection from "./components/ProfileSection";

export const metadata: Metadata = {
  title: "Личный кабинет",
};

export default function CabinetPage() {
  return (
    <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr_300px]">
      <ProfileSection className="px-2 order-2 md:order-none lg:px-5" />
      <MainSection />
      <div></div>
    </div>
  );
}

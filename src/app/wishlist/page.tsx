import { Metadata } from "next";
import WishlistList from "./components/wishlist-list";

export const metadata: Metadata = {
  title: "Избранное",
};

export default function WishlistPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Избранные товары</h1>
      <WishlistList />
    </div>
  );
}

import PageContainer from "@/components/layout/page-container";
import PageFooter from "@/components/layout/page-footer";
import PageHeader from "@/components/layout/page-header";
import ReactQueryProvider from "@/components/providers/react-query";
import { StoreProvider } from "@/components/providers/zustand";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/util";
import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const font = Geologica({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Интернет-магазин алкоголя Bottle & Barrel",
    default: "Интернет-магазин алкоголя Bottle & Barrel",
  },
  description:
    "Покупайте хороший алкоголь в магазинах Bottle & Barrel: более 2000 напитков на любой вкус!",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Интернет-магазин алкоголя Bottle & Barrel",
    description:
      "Покупайте хороший алкоголь в магазинах Bottle & Barrel: более 2000 напитков на любой вкус!",
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "h-screen")}>
        <StoreProvider>
          <ReactQueryProvider>
            <PageContainer>
              <PageHeader />
              {children}
            </PageContainer>
            <PageFooter className="mt-auto" />
          </ReactQueryProvider>
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SideMenu from "@/components/sideMenu/SideMenu";
import { Header } from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "Data Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideMenu />
       {children}

      </body>
    </html>
  );
}

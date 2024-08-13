import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import SessionProviderWrapper from "@/components/sessionProvider/Provider";

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
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "@/utils/icons";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "Data Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="container">
        <div className="left">
          <Link href="/" className="link">
          <Image src={LOGO.logoGlobe} alt="" width={32} height={32}/>
          <span className="name">SchoolDani</span>
          </Link>
          <Menu />
        </div>
        <div className="right">
          <Navbar />
          {children}
        </div>
      </div>

  );
}

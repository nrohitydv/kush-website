/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/nav/Header";
import Layout from "@/components/nav/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
     
        {/* <Layout headerStyle={""} headTitle={""}   /> */}
        {children}
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
        </body>
    </html>
  );
}

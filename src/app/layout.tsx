import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/app-layout";
import { ShieldAlert } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauro Davoli",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <AppLayout>{children}</AppLayout>

        <div className="p-10 flex-col gap-10 flex xl:hidden ">
          <ShieldAlert size={64} className="mx-auto my-auto text-white" />
          <p className="text-2xl text-white text-center self-center max-w-[20rem] mx-auto">
            Sorry, this page is not available in this view. Please try resizing
            your browser window or try again on a larger screen.
          </p>
        </div>
      </body>
    </html>
  );
}

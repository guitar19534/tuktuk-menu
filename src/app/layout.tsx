import type { Metadata, Viewport } from "next";
import { Chilanka } from "next/font/google";
import "./globals.css";

const chilanka = Chilanka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chilanka",
});

export const metadata: Metadata = {
  title: "Tuk-Tuk Restaurant | Thai Street Food",
  description: "Tuk-Tuk Restaurant – Authentic Thai Street Food Menu",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chilanka.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#fff8f3]">{children}</body>
    </html>
  );
}

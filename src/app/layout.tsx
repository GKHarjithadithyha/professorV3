import type { Metadata } from "next";
import { Inter, Outfit, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr. N. Bharathiraja - Academic Portfolio",
  description: "Academic Portfolio of Dr. N. Bharathiraja, Associate Professor and Researcher in AI & IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${lora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

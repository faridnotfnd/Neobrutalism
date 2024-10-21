import type { Metadata } from "next";
import { Stint_Ultra_Expanded } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider"; // Pastikan jalur ini benar

// Mendeklarasikan font
const inter = Stint_Ultra_Expanded({ weight: "400", subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "Farid Portfolio", // Anda bisa mengubah judul sesuai kebutuhan
  description: "thnks",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={`${inter.className} ${workSans.className}`}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}

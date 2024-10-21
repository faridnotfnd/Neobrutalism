import type { Metadata } from "next";
import { Stint_Ultra_Expanded, Work_Sans } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";

// Declare fonts
const stintUltraExpanded = Stint_Ultra_Expanded({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-stint", // Add this line
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans", // Add this line
});

// Metadata
export const metadata: Metadata = {
  title: "Farid Portfolio",
  description: "Farid Sidik's Personal Portfolio",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade" suppressHydrationWarning>
      <body
        className={`${stintUltraExpanded.variable} ${workSans.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script dangerouslySetInnerHTML={{ __html: "AOS.init();" }} />
      </body>
    </html>
  );
}

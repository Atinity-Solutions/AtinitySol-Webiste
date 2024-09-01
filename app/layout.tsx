import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GTM from "@/components/GTM/GTM";
import { ThemeProvider } from "./provider";
import Header from "@/components/Header/Header";
import PreloaderWrapper from "@/components/Preloader/PreloaderWrapper";
import Footer from "@/components/Footer/Footer";

import CustomCursor from "@/components/ui/custom-cursor";
import ScrollToTop from "@/components/ui/scroll-to-top";

// Initialize your fonts
const inter = Inter({ subsets: ["latin"] });
const dm_sans = Inter({ subsets: ["latin"], variable: "--font-dm-sans" });
const rethink_sans = Inter({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Atinity Solutions",
  description: "Company Website",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dm_sans.variable} ${rethink_sans.variable} ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <GTM />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PreloaderWrapper>
            <Header />
            <CustomCursor />
            <ScrollToTop />
            {children}
            <Footer />
          </PreloaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

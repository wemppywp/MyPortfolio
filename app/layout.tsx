import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ScrollProgress from "@/components/scroll-progress";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Wemppy | Software Developer Portfolio",
  description:
    "Portfolio of Wemppy, a software developer focused on modern web apps, mobile experiences, and system analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} !scroll-smooth`}
    >
      <body className="relative min-h-screen bg-[var(--background)] pt-24 font-sans text-[var(--foreground)] antialiased transition-colors duration-300 sm:pt-32">
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute left-[-8rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.22),_transparent_68%)] blur-2xl" />
          <div className="absolute right-[-10rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.18),_transparent_72%)] blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-[28rem] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.55))] dark:bg-[linear-gradient(180deg,transparent,rgba(5,10,20,0.72))]" />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <Header />
            <Toaster position="top-right" />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

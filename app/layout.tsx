import "./globals.css";
import { Inter, Montserrat_Alternates, Montserrat } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Elliot Trapp | Portfolio | Software Engineer",
  description:
    "Elliot Trapp is a full-stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.className} relative bg-slate-50 text-slate-950 transition-colors dark:bg-zinc-900 dark:text-white/80`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
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

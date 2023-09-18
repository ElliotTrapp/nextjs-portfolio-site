import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} h-[5000px]pt-28 relative bg-slate-50 text-slate-950 sm:pt-36`}
      >
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[50.25rem] w-[31.25rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[50.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}

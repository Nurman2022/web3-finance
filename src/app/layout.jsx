import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarMain } from "@/components/navbar";
import { CircleGradient } from "@/components/ui/circle-gradient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WF3",
  description: "Web3 Finance Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body
        className={`${inter.variable} antialiased`}
      >
        <NavbarMain>
          <div className="relative w-full overflow-hidden -mt-20">
            <CircleGradient />
            {children}
          </div>
        </NavbarMain>
      </body>
    </html>
  );
}

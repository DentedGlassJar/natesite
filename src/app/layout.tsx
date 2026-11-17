import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NateSite",
  description: "The website used for my Portfolio"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-[#FFE7C9]">
        {children}
      </body>
    </html>
  );
}
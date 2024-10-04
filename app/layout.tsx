import type { Metadata } from "next";
import "./globals.css";
import { ralewayFont } from "./fonts";

export const metadata: Metadata = {
  title: "Denis Larin",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="freelancehunt" content="a19f3ebefb38a97" />
      </head>
      <body
        className={`${ralewayFont.className} antialiased text-slate-300 bg-m-dark`}
      >
        {children}
      </body>
    </html>
  );
}

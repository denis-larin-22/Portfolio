import type { Metadata } from "next";
import "./globals.css";
import { montserratFont, ralewayFont } from "./fonts";
import { LanguageProvider } from "./lib/LanguageContext";

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
        className={`${ralewayFont.className} ${montserratFont.variable} antialiased text-slate-300 bg-m-dark`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: 'Adrián Racovita | Portfolio',
    description: 'Confide your inner thoughts and get wise advice from legends'
},
  title: "Adrián Racovita | Portfolio",
  description: "Mi porfolio personal con Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta property="og:image" content={"https://elreinodedracula.es/wp-content/uploads/2024/05/opengraph-image.png"} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-SZB5P03KES" />
    </html>
  );
}

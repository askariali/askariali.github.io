import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Askari",
  description: "I wrote this blog to store my thoughts. I hope you like it.",
  keywords: [
    "html",
    "css",
    "js",
    "javascript",
    "typescript",
    "react.js",
    "next.js",
    "web development",
  ],
  authors: [{ name: "Ali" }],
  creator: "Ali Askari",
  publisher: "Ali Askari",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑‍💻</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-017JWJE2VP" />
      )}
    </html>
  );
}

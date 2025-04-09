import { ReactNode } from "react";

import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

import "@/app/static/styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Project In Bio",
  description: "Your projects & social media in a single link",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.className} antialiased bg-background-primary text-content-body`}
      >
        {children}
      </body>
    </html>
  );
}

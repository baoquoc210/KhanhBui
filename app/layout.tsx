import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}


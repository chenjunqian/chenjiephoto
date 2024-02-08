import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Chen Jie's Photo",
  description: "This is a photo blog by Chen Jie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
      <Analytics />
    </html>
  );
}

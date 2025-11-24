"use client";
import { Montserrat } from 'next/font/google';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";

const inter = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}) {
  return (
    <html className ={inter.className} lang="en">
      <body>
        <SmoothCursor />
          {children}
      </body>
    </html>
  );
}
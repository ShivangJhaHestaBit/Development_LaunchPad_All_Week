"use client";
import { Particles } from "@/components/ui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <SmoothCursor />
          {children}
      </body>
    </html>
  );
}
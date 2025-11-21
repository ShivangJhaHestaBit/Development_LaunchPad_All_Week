"use client";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { useState } from "react";
import "@/app/globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Modal from "@/components/ui/Modal";
export default function RootLayout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
        <SmoothCursor />
        <div className="flex w-screen h-screen">
          <div
            className={`${sidebarOpen ? "block" : "hidden"} h-full w-[15%] min-w-[200px]`}>
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1 h-full">
            <header className="h-[80px]">
              <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
            </header>
            <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
              {children}
            </main>
          </div>
        </div>
      </div>
  );
}
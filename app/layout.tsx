import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import React from "react"; 
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mradul's Portfolio",
  description: " delivers the best web development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
            {children}
          </ThemeProvider>
         
    
    </body>
            
    </html>
  );
}
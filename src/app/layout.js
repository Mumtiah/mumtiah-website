"use client";
import { Providers } from "./providers";

import { Inter } from "next/font/google";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

"use client";

import "@/app/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"; // Import the Footer component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar and Footer will only render on the client side */}
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}

import "@/app/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";  // Import the Footer component

export const metadata = {
  title: "My App",
  description: "Simplified Root Layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}

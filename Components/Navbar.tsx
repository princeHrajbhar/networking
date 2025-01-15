"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Import Image from Next.js

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/next.svg" // Image path
            alt="Logo"
            width={40} // Set width
            height={40} // Set height
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Menu Icon (Right top corner) */}
        <div className="md:hidden flex items-center absolute right-4 top-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu & Search Section */}
        <div className="flex items-center space-x-8 w-full justify-center">
          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Contact", path: "/contact" }, { name: "Blog", path: "/blog" }, { name: "Product", path: "/product" }].map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className={`text-sm font-medium ${isActive(menu.path) ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-500"}`}
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Login/Signup at the far right (Desktop) */}
        <div className="ml-4 hidden md:block">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-500"
          >
            Login/Signup
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} w-full bg-white shadow-md`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Contact", path: "/contact" }, { name: "Blog", path: "/blog" }, { name: "Product", path: "/product" }].map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className={`text-sm font-medium ${isActive(menu.path) ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-500"}`}
            >
              {menu.name}
            </Link>
          ))}

          {/* Login/Signup in Mobile Dropdown */}
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-500"
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

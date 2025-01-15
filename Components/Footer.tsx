"use client"
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image"; // Import the Image component

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col items-start">
          {/* Use Next.js Image component for optimization */}
          <Image 
            src="/next.svg" 
            alt="Logo" 
            width={96} 
            height={24} 
            className="mb-4" 
          />
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-400">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-400">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">Contact</h4>
          <p className="flex items-center mb-2 text-gray-600">
            <FaPhoneAlt className="mr-2 text-blue-400" />
            +1 (234) 567-890
          </p>
          <p className="flex items-center mb-2 text-gray-600">
            <FaEnvelope className="mr-2 text-blue-400" />
            info@company.com
          </p>
          <p className="flex items-center text-gray-600">
            <FaLocationArrow className="mr-2 text-blue-400" />
            123 Business St, City, Country
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 pt-4 text-center text-sm text-gray-600 border-t border-gray-300">
        <p>&copy; 2025 Company Name. All Rights Reserved.</p>
        <p className="text-gray-400">
          Designed with <span className="text-red-500">❤</span> Prince Rajbhar
        </p>
      </div>
    </footer>
  );
};

export default Footer;

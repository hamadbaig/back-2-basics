"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  const whatsappNumber = "8527862446";
  return (
    <footer className="bg-[#62BC7B] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-3   items-center justify-between ">
        {/* Logo and Trademark Section */}
        <div className="footer-section mb-6 md:mb-0">
          <Image
            src="/footerrm.png"
            alt="Back 2 Basics Elements Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Navigation Links */}
        <div className="footer-section flex flex-col items-center space-y-2 mb-6 md:mb-0">
          <h4 className="font-bold">Company</h4>
          <Link href="/innovation">Innovation</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/news-insights">News & Insights</Link>
        </div>

        <div className="footer-section flex flex-col items-center space-y-2 mb-6 md:mb-0">
          <h4 className="font-bold">About Us</h4>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/supplier">Become a Supplier</Link>
          <Link href="/policies">Corporate Policies</Link>
        </div>

        {/* Contact Information */}
        <div className="footer-section flex flex-col items-center space-y-2">
          <p>info@b2b-recycle.com</p>
          <p>
            Ground Floor Unit 4 Plot 103.
            <br />A Bock, Sector 63, Noida,
          </p>
          <p>Uttar Pardesh 201301</p>
          <p>+918527862446</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section flex  items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footerrm.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/hammad-ahmed-340aa3218/"
            className=""
          >
            <FaLinkedin className="w-[3rem]" />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaWhatsapp className="w-[3rem] " />
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm">
        ©Back 2 Basics Elements, Inc. All rights reserved. Hydro-to-Cathode®,
        Hydro-to-Anode® and Back 2 Basics Elements® are trademarks of Back 2
        Basics Elements, Inc.
      </p>
    </footer>
  );
}

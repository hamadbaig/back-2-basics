"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#62BC7B] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-3   items-center justify-between ">
        {/* Logo and Trademark Section */}
        <div className="footer-section mb-6 md:mb-0">
          <Image
            src="/footerrm.png"
            alt="Ascend Elements Logo"
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
          <p>info@ascendelements.com</p>
          <p>
            133 Flanders Rd.
            <br />
            Westborough, MA 01581
          </p>
          <p>(508) 936-7701</p>
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footerrm.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footerrm.png" alt="YouTube" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm">
        ©Ascend Elements, Inc. All rights reserved. Hydro-to-Cathode®,
        Hydro-to-Anode® and Ascend Elements® are trademarks of Ascend Elements,
        Inc.
      </p>
    </footer>
  );
}

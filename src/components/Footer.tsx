import Link from "next/link";
import React from "react";
import FooterContactForm from "./FooterContactForm";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 mt-12">
      {/* Centered Contact Form Section */}
      <section className="flex justify-center items-center py-10">
        <FooterContactForm />
      </section>

      {/* Footer Bottom Section */}
      <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Development Links */}
        <div className="flex justify-center items-center text-white gap-x-2 text-sm">
          <p>
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;</span>
          </p>
          <Link href="https://nextjs.org/" target="_blank" className="flex items-center">
            <Image src="/nextjs.svg" alt="Next.js 14" width={24} height={24} />
          </Link>
          <span className="text-light">&nbsp;&&nbsp;</span>
          <Link href="https://sanity.io/" target="_blank" className="flex items-center">
            <Image src="/sanity.svg" alt="Sanity" width={24} height={24} />
          </Link>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-xs text-light text-center">
            © 2024 <span className="text-light font-bold">&nbsp;AK</span>
            <span className="text-accentDarkPrimary font-bold"> BLOGS&nbsp;</span>
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

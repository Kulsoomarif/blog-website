"use client";
import { useState } from "react";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Example list of blog slugs (you can fetch these from an API or static data)
  const blogPosts = [
    { slug: "first-post", title: "First Post" },
    { slug: "second-post", title: "Second Post" },
    { slug: "third-post", title: "Third Post" },
  ];

  return (
    <header className="flex items-center justify-between py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      
      <div className="flex items-center justify-start px-4">
        <Link href={"/"} className="text-3xl font-bold text-dark dark:text-light">
          AK<span className="text-3xl text-blue-900 text-accentDarkPrimary"> BLOGS</span>
        </Link>
      </div>

      <nav className="hidden md:flex md:items-center md:justify-center gap-x-6 font-bold uppercase">
        <Link href={"/"} className="text-dark dark:text-light hover:text-accentDarkPrimary">
          Home
        </Link>
        
        {/* Link to Blogs page */}
        <Link
          href={"/blog"}
          className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark hover:bg-accentDarkPrimary"
        >
          Blogs
        </Link>

        
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="text-dark dark:text-light hover:text-accentDarkPrimary"
          >
            {post.title}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-x-4 px-4">
        <SocialMedia />
        <ThemeToggle />
        <button
          className="md:hidden ml-4"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-dark dark:bg-light mb-1"></span>
          <span className="block w-6 h-0.5 bg-dark dark:bg-light mb-1"></span>
          <span className="block w-6 h-0.5 bg-dark dark:bg-light"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isNavOpen && (
        <div className="absolute top-0 left-0 w-full bg-background dark:bg-backgroundDark py-4 shadow-lg z-20 md:hidden">
          <nav className="flex flex-col items-center gap-y-4">
            <Link
              href={"/"}
              className="text-dark dark:text-light hover:text-accentDarkPrimary"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"/blog"}
              className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark hover:bg-accentDarkPrimary"
              onClick={() => setIsNavOpen(false)}
            >
              Blogs
            </Link>
            
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="text-dark dark:text-light hover:text-accentDarkPrimary"
                onClick={() => setIsNavOpen(false)}
              >
                {post.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

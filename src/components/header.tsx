"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  // Check if window is scrolled to add background to header
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 10);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#E86343]">
            Deliciously Simple
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium hover:text-[#E86343] transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-lg font-medium hover:text-[#E86343] transition-colors">
              Recipes
            </Link>
            <Link href="/categories" className="text-lg font-medium hover:text-[#E86343] transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-[#E86343] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-[#E86343] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Button */}
          <div className="hidden md:flex items-center space-x-2 relative">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={cn(
                "transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none",
                searchValue ? "w-64" : "w-32 focus:w-64"
              )}
            />
            <button
              className="bg-[#E86343] text-white p-2 rounded-full"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full border border-gray-300 rounded-full px-4 py-2"
              />
              <button
                className="bg-[#E86343] text-white p-2 rounded-full ml-2"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-lg font-medium py-2 hover:text-[#E86343]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium py-2 hover:text-[#E86343]"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link
                href="/categories"
                className="text-lg font-medium py-2 hover:text-[#E86343]"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium py-2 hover:text-[#E86343]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium py-2 hover:text-[#E86343]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

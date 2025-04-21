"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Store subscription in localStorage
      const subscriptions = JSON.parse(localStorage.getItem("subscriptions") || "[]");
      subscriptions.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
      
      setIsSubscribed(true);
      setEmail("");
      
      // Reset success message after a delay
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-[#E86343]">
              Deliciously Simple
            </Link>
            <p className="mt-4 text-gray-600">
              Your guide to easy and tasty recipes that anyone can make. Discover
              delicious meals, cooking tips, and culinary inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/categories/healthy" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Healthy Meals
                </Link>
              </li>
              <li>
                <Link href="/categories/quick" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Quick & Easy
                </Link>
              </li>
              <li>
                <Link href="/categories/seasonal" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Seasonal Dishes
                </Link>
              </li>
              <li>
                <Link href="/categories/comfort" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Comfort Food
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#E86343] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get our latest recipes and cooking tips directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
              >
                Subscribe
              </Button>
              {isSubscribed && (
                <p className="text-[#2A9187] text-sm">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#E86343]"
              >
                <Instagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#E86343]"
              >
                <Facebook />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#E86343]"
              >
                <Twitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#E86343]"
              >
                <Youtube />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Deliciously Simple. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

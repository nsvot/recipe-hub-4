import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Deliciously Simple</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Your guide to easy and tasty recipes that anyone can make</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/blog">Explore Recipes</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

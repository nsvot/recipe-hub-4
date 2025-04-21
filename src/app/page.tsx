import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ChevronRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { RecipeCard } from "@/components/recipe-card";
import { CategoryCard } from "@/components/category-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { Button } from "@/components/ui/button";
import { categories, recipes } from "@/data/recipes";

export default function HomePage() {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);
  const popularRecipes = recipes.filter(recipe => recipe.popular).slice(0, 3);
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Link href="/blog" className="text-[#E86343] font-medium flex items-center hover:underline">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-8">
            {featuredRecipes.slice(0, 2).map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                featured
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse Recipe Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our recipes by category to find exactly what you're looking for. From quick meals to seasonal specialties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.slug} 
                name={category.name} 
                slug={category.slug} 
                description={category.description}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular Recipes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our readers' favorites that have earned their place in kitchens around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Deliciously Simple</h2>
              <p className="text-gray-600 mb-6">
                At Deliciously Simple, we believe that cooking should be accessible, enjoyable, and produce delicious results for everyone. Our mission is to share easy-to-follow recipes, practical cooking tips, and culinary inspiration for home cooks of all levels.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're a busy parent looking for quick weeknight meals, a health-conscious individual focused on nutritious options, or someone who simply loves good food, our collection of tested recipes has something for you.
              </p>
              <Button variant="primary" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterForm />
    </main>
  );
}

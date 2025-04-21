import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/data/recipes";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recipe Categories</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our recipes by category to find exactly what you're looking for, from quick weeknight meals to special occasion dishes.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard 
              key={category.slug} 
              name={category.name} 
              slug={category.slug} 
              description={category.description}
              icon={category.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

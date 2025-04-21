"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { RecipeCard } from "@/components/recipe-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { recipes, categories } from "@/data/recipes";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Filter recipes based on search term and category
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesCategoryFilter = selectedCategory === "" || recipe.category === selectedCategory;
      const matchesSearchFilter = 
        searchTerm === "" || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategoryFilter && matchesSearchFilter;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Recipes</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our collection of delicious recipes, from quick weeknight dinners to impressive party dishes.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <span className="text-gray-700">Filter by:</span>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E86343]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">No recipes found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria.</p>
            <Button 
              variant="primary" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

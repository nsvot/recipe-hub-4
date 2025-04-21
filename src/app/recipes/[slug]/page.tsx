"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Clock, Users, Printer, ChevronLeft, Star, Heart, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recipes, Recipe as RecipeType } from "@/data/recipes";
import { RecipeCard } from "@/components/recipe-card";

export default function RecipePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedRecipes, setRelatedRecipes] = useState<RecipeType[]>([]);
  
  useEffect(() => {
    const foundRecipe = recipes.find(r => r.slug === slug);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      
      // Check if this recipe is in favorites
      const favorites = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
      setIsFavorite(favorites.some((id: string) => id === foundRecipe.id));
      
      // Find related recipes from the same category
      const related = recipes
        .filter(r => r.id !== foundRecipe.id && r.category === foundRecipe.category)
        .slice(0, 3);
      setRelatedRecipes(related);
    }
  }, [slug]);
  
  const toggleFavorite = () => {
    if (!recipe) return;
    
    const favorites = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: string) => id !== recipe.id);
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(recipe.id);
      localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-6 pt-32 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the recipe you're looking for.</p>
        <Button variant="primary" asChild>
          <Link href="/blog">Browse All Recipes</Link>
        </Button>
      </div>
    );
  }
  
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#E86343] mb-4">
            <ChevronLeft size={16} className="mr-1" /> Back to all recipes
          </Link>
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                  <Image
                    src={recipe.authorImage}
                    alt={recipe.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="mr-4">{recipe.authorName}</span>
                <span>{new Date(recipe.datePublished).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={toggleFavorite}
              >
                <Heart 
                  size={16} 
                  className={isFavorite ? "fill-[#E86343] text-[#E86343]" : ""} 
                />{" "}
                {isFavorite ? "Saved" : "Save"}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={() => window.print()}
              >
                <Printer size={16} /> Print
              </Button>
            </div>
          </div>
          
          {/* Social Sharing */}
          <div className="flex space-x-2 mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 text-blue-600"
              onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
            >
              <Facebook size={16} /> Share
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 text-blue-400"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${recipe.title}&url=${window.location.href}`, '_blank')}
            >
              <Twitter size={16} /> Tweet
            </Button>
          </div>
        </div>
      </div>
      
      {/* Recipe Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Description */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700">{recipe.description}</p>
            </div>
            
            {/* Ingredients */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-[#E86343] rounded-full mt-2 mr-3"></span>
                    <span className="flex-1">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Instructions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#E86343] text-white font-bold mr-4">
                      {index + 1}
                    </span>
                    <div className="flex-1 pt-1">{instruction}</div>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Nutrition Facts */}
            {recipe.nutritionFacts && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Nutrition Facts</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E86343]">{recipe.nutritionFacts.calories}</div>
                      <div className="text-gray-500 text-sm">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E86343]">{recipe.nutritionFacts.protein}g</div>
                      <div className="text-gray-500 text-sm">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E86343]">{recipe.nutritionFacts.carbs}g</div>
                      <div className="text-gray-500 text-sm">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E86343]">{recipe.nutritionFacts.fat}g</div>
                      <div className="text-gray-500 text-sm">Fat</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recipe Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Recipe Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prep Time:</span>
                  <span className="font-medium">{recipe.prepTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cook Time:</span>
                  <span className="font-medium">{recipe.cookTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Time:</span>
                  <span className="font-medium">{totalTime} mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Servings:</span>
                  <span className="font-medium">{recipe.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">{recipe.difficulty}</span>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    href={`/blog?tag=${tag}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Related Recipes */}
            <div>
              <h3 className="text-lg font-bold mb-4">You Might Also Like</h3>
              <div className="space-y-4">
                {relatedRecipes.map(related => (
                  <Link 
                    key={related.id} 
                    href={`/recipes/${related.slug}`}
                    className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="relative w-16 h-16 rounded overflow-hidden mr-4">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-2">{related.title}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock size={12} className="mr-1" />
                        <span>{related.prepTime + related.cookTime} mins</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

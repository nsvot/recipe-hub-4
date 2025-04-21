import Link from "next/link";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
  featured?: boolean;
}

export const RecipeCard = ({ recipe, className, featured = false }: RecipeCardProps) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (featured) {
    return (
      <div className={cn("group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg", className)}>
        <Link href={`/recipes/${recipe.slug}`} className="block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#E86343] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#E86343] transition-colors">
                {recipe.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{recipe.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-500">
                  <Clock size={18} className="mr-1" />
                  <span>{totalTime} mins</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users size={18} className="mr-1" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
              <div className="flex items-center mt-auto">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                    <Image
                      src={recipe.authorImage}
                      alt={recipe.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-600">{recipe.authorName}</span>
                </div>
                <span className="text-sm text-gray-500 ml-auto">
                  {formatDate(recipe.datePublished)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={cn("group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg", className)}>
      <Link href={`/recipes/${recipe.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#E86343] text-white px-3 py-1 rounded-full text-sm font-medium">
              {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 group-hover:text-[#E86343] transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{recipe.description}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-1" />
              <span>{totalTime} mins</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users size={16} className="mr-1" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

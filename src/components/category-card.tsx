import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: string;
  className?: string;
}

export const CategoryCard = ({ name, slug, description, icon, className }: CategoryCardProps) => {
  return (
    <Link href={`/categories/${slug}`} className={cn(
      "block p-6 rounded-xl bg-white shadow-md transition-all hover:shadow-lg border-2 border-transparent hover:border-[#E86343]/20",
      className
    )}>
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </Link>
  );
};

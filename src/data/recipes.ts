export interface Recipe {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  nutritionFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  featured?: boolean;
  popular?: boolean;
  datePublished: string;
  authorName: string;
  authorImage: string;
}
export const categories = [{
  name: 'Healthy',
  slug: 'healthy',
  description: 'Nutritious meals that don\'t sacrifice flavor',
  icon: '🥗'
}, {
  name: 'Quick & Easy',
  slug: 'quick',
  description: 'Delicious dishes ready in 30 minutes or less',
  icon: '⏱️'
}, {
  name: 'Comfort Food',
  slug: 'comfort',
  description: 'Hearty dishes that warm the soul',
  icon: '🍲'
}, {
  name: 'Seasonal',
  slug: 'seasonal',
  description: 'Recipes that highlight the best of each season',
  icon: '🍁'
}, {
  name: 'Desserts',
  slug: 'desserts',
  description: 'Sweet treats to satisfy any craving',
  icon: '🍰'
}];
export const recipes: Recipe[] = [{
  id: '1',
  title: 'Mediterranean Quinoa Bowl',
  slug: 'mediterranean-quinoa-bowl',
  category: 'healthy',
  tags: ['vegetarian', 'high-protein', 'meal-prep'],
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'A protein-packed quinoa bowl with fresh Mediterranean flavors, perfect for a healthy lunch or dinner.',
  prepTime: 15,
  cookTime: 20,
  servings: 4,
  difficulty: 'Easy',
  ingredients: ['1 cup quinoa, rinsed', '2 cups vegetable broth', '1 cucumber, diced', '1 cup cherry tomatoes, halved', '1/2 red onion, finely diced', '1/2 cup kalamata olives, pitted and sliced', '1/2 cup feta cheese, crumbled', '1/4 cup fresh parsley, chopped', '3 tbsp olive oil', '2 tbsp lemon juice', '1 tsp dried oregano', 'Salt and pepper to taste'],
  instructions: ['In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.', 'Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and transfer to a large bowl to cool slightly.', 'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper to make the dressing.', 'Add cucumber, cherry tomatoes, red onion, olives, and parsley to the quinoa.', 'Pour the dressing over the quinoa mixture and toss to combine.', 'Sprinkle with feta cheese before serving.'],
  nutritionFacts: {
    calories: 320,
    protein: 10,
    carbs: 35,
    fat: 16
  },
  featured: true,
  datePublished: '2023-06-12',
  authorName: 'Chef Maria',
  authorImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
}, {
  id: '2',
  title: 'Creamy Tuscan Garlic Chicken',
  slug: 'creamy-tuscan-garlic-chicken',
  category: 'comfort',
  tags: ['dinner', 'italian', 'chicken'],
  image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80',
  description: 'A rich and creamy Tuscan-style chicken dish with sun-dried tomatoes and spinach, perfect for a cozy dinner.',
  prepTime: 10,
  cookTime: 25,
  servings: 4,
  difficulty: 'Medium',
  ingredients: ['4 boneless, skinless chicken breasts', '2 tbsp olive oil', '3 cloves garlic, minced', '1 cup heavy cream', '1/2 cup chicken broth', '1/2 cup sun-dried tomatoes, chopped', '1 cup spinach, packed', '1/2 cup parmesan cheese, grated', '1 tsp Italian seasoning', 'Salt and pepper to taste'],
  instructions: ['Season chicken breasts with salt, pepper, and Italian seasoning on both sides.', 'Heat olive oil in a large skillet over medium-high heat. Add chicken and cook for 5-7 minutes on each side until golden and cooked through. Remove chicken and set aside.', 'In the same skillet, add minced garlic and sauté for 1 minute until fragrant.', 'Add chicken broth and scrape up any browned bits from the pan.', 'Pour in heavy cream and bring to a simmer. Add sun-dried tomatoes and cook for 4-5 minutes until sauce begins to thicken.', 'Stir in spinach and parmesan cheese, cooking until spinach wilts and cheese melts.', 'Return chicken to the skillet, spooning sauce over the top. Simmer for another 3-4 minutes.', 'Serve hot with pasta or crusty bread.'],
  nutritionFacts: {
    calories: 450,
    protein: 35,
    carbs: 7,
    fat: 32
  },
  popular: true,
  datePublished: '2023-05-18',
  authorName: 'Chef Thomas',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}, {
  id: '3',
  title: '15-Minute Garlic Shrimp Stir Fry',
  slug: '15-minute-garlic-shrimp-stir-fry',
  category: 'quick',
  tags: ['seafood', 'weeknight', 'stir-fry'],
  image: "https://picsum.photos/200",
  description: 'A super quick and flavorful shrimp stir fry that comes together in just 15 minutes, perfect for busy weeknights.',
  prepTime: 5,
  cookTime: 10,
  servings: 2,
  difficulty: 'Easy',
  ingredients: ['1 lb large shrimp, peeled and deveined', '3 cloves garlic, minced', '1 red bell pepper, sliced', '2 cups broccoli florets', '2 tbsp soy sauce', '1 tbsp honey', '1 tsp sesame oil', '1/2 tsp red pepper flakes', '2 tbsp vegetable oil', '1 tbsp fresh ginger, grated', 'Green onions for garnish', 'Sesame seeds for garnish'],
  instructions: ['In a small bowl, whisk together soy sauce, honey, sesame oil, and red pepper flakes. Set aside.', 'Heat vegetable oil in a large skillet or wok over high heat.', 'Add minced garlic and grated ginger, stir fry for 30 seconds until fragrant.', 'Add shrimp and cook for 1-2 minutes on each side until they start to turn pink.', 'Add bell pepper and broccoli, stir fry for another 2-3 minutes until vegetables are crisp-tender.', 'Pour the sauce over the shrimp and vegetables, toss to coat and cook for another minute.', 'Garnish with sliced green onions and sesame seeds before serving.', 'Serve hot over rice or noodles.'],
  nutritionFacts: {
    calories: 280,
    protein: 24,
    carbs: 15,
    fat: 14
  },
  featured: true,
  popular: true,
  datePublished: '2023-07-02',
  authorName: 'Chef Sarah',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}, {
  id: '4',
  title: 'Autumn Roasted Vegetable Salad',
  slug: 'autumn-roasted-vegetable-salad',
  category: 'seasonal',
  tags: ['fall', 'vegetarian', 'salad'],
  image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  description: 'A hearty and colorful fall salad featuring seasonal roasted vegetables and a tangy maple vinaigrette.',
  prepTime: 15,
  cookTime: 30,
  servings: 4,
  difficulty: 'Easy',
  ingredients: ['1 small butternut squash, peeled and cubed', '2 large carrots, chopped', '1 red onion, cut into wedges', '2 cups brussels sprouts, halved', '3 tbsp olive oil', '1 tsp dried thyme', '6 cups mixed greens', '1/2 cup dried cranberries', '1/2 cup pecans, toasted', '1/3 cup feta cheese, crumbled', 'For the vinaigrette:', '3 tbsp olive oil', '2 tbsp apple cider vinegar', '1 tbsp maple syrup', '1 tsp Dijon mustard', 'Salt and pepper to taste'],
  instructions: ['Preheat oven to 425°F (220°C).', 'In a large bowl, toss butternut squash, carrots, red onion, and brussels sprouts with olive oil, thyme, salt, and pepper.', 'Spread vegetables on a baking sheet in a single layer and roast for 25-30 minutes, stirring once halfway through, until tender and caramelized.', 'While vegetables are roasting, make the vinaigrette by whisking together olive oil, apple cider vinegar, maple syrup, Dijon mustard, salt, and pepper.', 'In a large salad bowl, place the mixed greens and top with the roasted vegetables.', 'Sprinkle with dried cranberries, toasted pecans, and crumbled feta cheese.', 'Drizzle with maple vinaigrette just before serving.'],
  nutritionFacts: {
    calories: 310,
    protein: 6,
    carbs: 28,
    fat: 22
  },
  datePublished: '2023-09-28',
  authorName: 'Chef Maria',
  authorImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
}, {
  id: '5',
  title: 'Classic Chocolate Chip Cookies',
  slug: 'classic-chocolate-chip-cookies',
  category: 'desserts',
  tags: ['baking', 'cookies', 'dessert'],
  image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
  description: 'Perfectly chewy chocolate chip cookies with crisp edges and soft centers - a classic favorite for all occasions.',
  prepTime: 15,
  cookTime: 10,
  servings: 24,
  difficulty: 'Easy',
  ingredients: ['1 cup (2 sticks) unsalted butter, softened', '3/4 cup granulated sugar', '3/4 cup packed brown sugar', '2 large eggs', '2 tsp vanilla extract', '2 1/4 cups all-purpose flour', '1 tsp baking soda', '1/2 tsp salt', '2 cups semi-sweet chocolate chips', '1 cup chopped walnuts (optional)'],
  instructions: ['Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.', 'In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.', 'Beat in eggs one at a time, then stir in vanilla extract.', 'In a separate bowl, combine flour, baking soda, and salt. Gradually stir into the butter mixture just until combined.', 'Fold in chocolate chips and walnuts if using.', 'Drop rounded tablespoons of dough onto prepared baking sheets, spacing them about 2 inches apart.', 'Bake for 9-11 minutes or until edges are golden but centers are still soft.', 'Allow cookies to cool on baking sheet for 5 minutes before transferring to wire racks to cool completely.'],
  nutritionFacts: {
    calories: 220,
    protein: 2,
    carbs: 28,
    fat: 12
  },
  popular: true,
  datePublished: '2023-04-15',
  authorName: 'Chef Sarah',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}, {
  id: '6',
  title: 'Hearty Vegetable Soup',
  slug: 'hearty-vegetable-soup',
  category: 'healthy',
  tags: ['soup', 'vegetarian', 'winter'],
  image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  description: 'A nutritious and filling vegetable soup that\'s perfect for cold weather and packed with vitamins and minerals.',
  prepTime: 20,
  cookTime: 40,
  servings: 6,
  difficulty: 'Easy',
  ingredients: ['2 tbsp olive oil', '1 large onion, diced', '3 cloves garlic, minced', '3 carrots, diced', '3 celery stalks, diced', '1 zucchini, diced', '1 cup green beans, trimmed and cut into 1-inch pieces', '1 can (14.5 oz) diced tomatoes', '6 cups vegetable broth', '1 can (15 oz) kidney beans, drained and rinsed', '1 cup frozen peas', '2 bay leaves', '1 tsp dried thyme', '1 tsp dried basil', '1/2 tsp dried oregano', 'Salt and pepper to taste', '2 tbsp fresh parsley, chopped', '1 tbsp lemon juice'],
  instructions: ['Heat olive oil in a large Dutch oven or soup pot over medium heat.', 'Add onions and cook for 5 minutes until translucent, then add garlic and cook for another 30 seconds.', 'Add carrots and celery, cook for 5 minutes until they begin to soften.', 'Stir in diced tomatoes, vegetable broth, bay leaves, thyme, basil, oregano, salt, and pepper.', 'Bring to a boil, then reduce heat to low and simmer for 15 minutes.', 'Add zucchini, green beans, and kidney beans. Simmer for another 10 minutes.', 'Stir in frozen peas and simmer for 5 more minutes until all vegetables are tender.', 'Remove from heat, discard bay leaves, and stir in fresh parsley and lemon juice.', 'Adjust seasoning to taste and serve hot with crusty bread.'],
  nutritionFacts: {
    calories: 180,
    protein: 9,
    carbs: 30,
    fat: 4
  },
  featured: true,
  datePublished: '2023-01-10',
  authorName: 'Chef Thomas',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}, {
  id: '7',
  title: 'Homemade Mac and Cheese',
  slug: 'homemade-mac-and-cheese',
  category: 'comfort',
  tags: ['pasta', 'cheese', 'american'],
  image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'The ultimate comfort food: creamy, cheesy macaroni and cheese with a crispy breadcrumb topping.',
  prepTime: 15,
  cookTime: 30,
  servings: 6,
  difficulty: 'Medium',
  ingredients: ['1 lb elbow macaroni', '6 tbsp unsalted butter, divided', '1/4 cup all-purpose flour', '3 cups whole milk, warmed', '1 tsp mustard powder', '1/4 tsp cayenne pepper', '1/4 tsp nutmeg', '8 oz sharp cheddar cheese, grated', '4 oz Gruyere cheese, grated', '4 oz American cheese, chopped', '1/2 cup panko breadcrumbs', 'Salt and pepper to taste', '2 tbsp fresh parsley, chopped'],
  instructions: ['Preheat oven to 350°F (175°C). Butter a 9x13 inch baking dish.', 'Cook macaroni in salted water for 2 minutes less than package directions. Drain and set aside.', 'In a large saucepan, melt 4 tablespoons butter over medium heat. Add flour and whisk constantly for 1 minute to make a roux.', 'Gradually whisk in warm milk, making sure to remove any lumps. Cook for 5 minutes, whisking often, until sauce thickens.', 'Remove from heat and stir in mustard powder, cayenne, nutmeg, salt, and pepper.', 'Add the cheddar, Gruyere, and American cheese, stirring until completely melted and smooth.', 'Fold in the cooked macaroni and transfer to the prepared baking dish.', 'In a small bowl, melt remaining 2 tablespoons butter and mix with panko breadcrumbs.', 'Sprinkle the breadcrumb mixture evenly over the mac and cheese.', 'Bake for 25-30 minutes until bubbly and golden brown on top.', 'Let cool for 5 minutes, then sprinkle with chopped parsley before serving.'],
  nutritionFacts: {
    calories: 540,
    protein: 22,
    carbs: 48,
    fat: 28
  },
  popular: true,
  datePublished: '2023-08-03',
  authorName: 'Chef Thomas',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}, {
  id: '8',
  title: 'Summer Berry Pavlova',
  slug: 'summer-berry-pavlova',
  category: 'seasonal',
  tags: ['dessert', 'summer', 'berries'],
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  description: 'A light and elegant dessert featuring a crisp meringue base topped with whipped cream and fresh summer berries.',
  prepTime: 30,
  cookTime: 90,
  servings: 8,
  difficulty: 'Hard',
  ingredients: ['For the meringue:', '6 large egg whites, at room temperature', '1 1/2 cups granulated sugar', '2 tsp cornstarch', '1 tsp white vinegar', '1 tsp vanilla extract', 'For the topping:', '2 cups heavy cream', '3 tbsp powdered sugar', '1 tsp vanilla extract', '2 cups mixed fresh berries (strawberries, blueberries, raspberries)', '2 tbsp fresh mint leaves', '2 tbsp pistachios, chopped (optional)'],
  instructions: ['Preheat oven to 275°F (135°C). Line a baking sheet with parchment paper and draw a 9-inch circle on it.', 'In a clean, large bowl, beat egg whites with an electric mixer until soft peaks form.', 'Gradually add sugar, 1 tablespoon at a time, while continuing to beat until stiff, glossy peaks form.', 'Sprinkle cornstarch over meringue, then gently fold in vinegar and vanilla extract.', 'Spread the meringue inside the circle on the parchment paper, creating a slight well in the center.', 'Bake for 1 hour 15 minutes until the outside is crisp but still white. Turn off the oven and leave the meringue inside with the door slightly ajar to cool completely.', 'Once cooled, transfer the meringue to a serving plate.', 'Whip the heavy cream with powdered sugar and vanilla extract until soft peaks form.', 'Spread the whipped cream over the meringue, leaving a border around the edge.', 'Top with fresh berries, sprinkle with mint leaves and pistachios if using.', 'Serve immediately or refrigerate for up to 1 hour before serving.'],
  nutritionFacts: {
    calories: 320,
    protein: 3,
    carbs: 40,
    fat: 18
  },
  featured: true,
  datePublished: '2023-06-21',
  authorName: 'Chef Sarah',
  authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80'
}];
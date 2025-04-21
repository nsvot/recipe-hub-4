import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function AboutPage() {
  return <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Deliciously Simple</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get to know our mission and the team behind your favorite recipes.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96">
            <Image src="https://picsum.photos/200" alt="Team preparing food" fill className="object-cover rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Deliciously Simple, we believe that cooking should be accessible, enjoyable, and produce delicious results for everyone. Our mission is to share easy-to-follow recipes, practical cooking tips, and culinary inspiration for home cooks of all levels.
            </p>
            <p className="text-gray-700 mb-4">
              We are passionate about helping people discover the joy of cooking, whether you're a beginner learning the basics or an experienced cook looking for new ideas. Our recipes are designed to be straightforward and reliable, using ingredients that are readily available.
            </p>
            <p className="text-gray-700">
              Beyond just providing recipes, we aim to build a community of food lovers who share our enthusiasm for good food and the connections it creates. We believe that meals bring people together and create lasting memories.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              Deliciously Simple began in 2023 when Harish Chitturi, an experienced chef with a passion for teaching, decided to create a resource for home cooks that would break down the barriers to great cooking. After years of teaching cooking classes, Harish noticed that many students were overwhelmed by complex recipes and techniques.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small collection of favorite recipes has grown into a comprehensive resource featuring hundreds of tested recipes across multiple categories. Along the way, we've assembled a team of food enthusiasts, professional cooks, and experienced writers who share our passion for making delicious food accessible to everyone.
            </p>
            <p className="text-gray-700 mb-8">
              Today, Deliciously Simple reaches thousands of home cooks around the world, helping them create satisfying meals and build confidence in the kitchen. We continue to grow and evolve, but our core mission remains the same: to make cooking deliciously simple.
            </p>
            
            <div className="relative h-80 w-full">
              <Image src="https://picsum.photos/200" alt="Kitchen with ingredients" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
        
        {/* Meet the Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80" alt="Harish Chitturi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">Harish Chitturi</h3>
              <p className="text-[#E86343] font-medium mb-3">Founder & Executive Chef</p>
              <p className="text-gray-600">
                With 15 years of culinary experience, Harish brings professional expertise and a passion for teaching to every recipe.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Maria Rodriguez" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maria Rodriguez</h3>
              <p className="text-[#E86343] font-medium mb-3">Recipe Developer</p>
              <p className="text-gray-600">
                Maria specializes in healthy recipes that don't sacrifice flavor, drawing inspiration from her international culinary training.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Thomas Wright" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thomas Wright</h3>
              <p className="text-[#E86343] font-medium mb-3">Food Photographer</p>
              <p className="text-gray-600">
                Thomas captures the beauty of each dish, making them look as good as they taste with his expert styling and photography.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#E86343]/10 rounded-full flex items-center justify-center text-[#E86343] mb-4 mx-auto">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Reliability</h3>
              <p className="text-gray-600 text-center">
                Every recipe is thoroughly tested to ensure consistent, successful results in your kitchen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#2A9187]/10 rounded-full flex items-center justify-center text-[#2A9187] mb-4 mx-auto">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We promote seasonal ingredients and mindful cooking practices that reduce food waste.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#2F3F4A]/10 rounded-full flex items-center justify-center text-[#2F3F4A] mb-4 mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Inclusivity</h3>
              <p className="text-gray-600 text-center">
                We embrace diverse culinary traditions and offer alternatives for different dietary needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>;
}
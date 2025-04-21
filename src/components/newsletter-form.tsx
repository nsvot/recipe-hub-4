"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Store subscription in localStorage
      const subscriptions = JSON.parse(localStorage.getItem("subscriptions") || "[]");
      subscriptions.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
      
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
      
      // Reset form after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Delicious Recipes In Your Inbox</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and never miss new recipes, cooking tips, and exclusive content.
          </p>
          
          {isSubmitted ? (
            <div className="bg-[#2A9187]/10 p-6 rounded-lg">
              <h3 className="text-[#2A9187] text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p>Keep an eye on your inbox for delicious recipes and cooking tips.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button 
                type="submit" 
                variant="primary" 
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

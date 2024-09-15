import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data when the component mounts
  useEffect(() => {
    setRecipes(data); // Load mock data into state
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

      {/* Grid layout for recipe cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

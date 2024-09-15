import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to store form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  // Validate form inputs
  const validate = () => {
    let valid = true;
    let newErrors = { title: '', ingredients: '', steps: '' };

    if (!title) {
      newErrors.title = 'Title is required.';
      valid = false;
    }
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required.';
      valid = false;
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Ingredients must contain at least two items.';
      valid = false;
    }
    if (!steps) {
      newErrors.steps = 'Preparation steps are required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(','),
        steps
      };

      console.log('New Recipe Submitted:', newRecipe);

      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({ title: '', ingredients: '', steps: '' });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter ingredients separated by commas"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

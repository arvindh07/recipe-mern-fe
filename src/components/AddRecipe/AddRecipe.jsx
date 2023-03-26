import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useGetUserId } from '../../hooks/useGetuserId';

const AddRecipe = () => {
  const userId = useGetUserId();
  const[cookies,setCookies] = useCookies(["access_token"]);
  const [recipeDetails, setRecipeDetails] = useState({
    name: "",
    description: "",
    ingredients: [],
    imageUrl: "",
    cookingTime: 0,
    createdBy: userId,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeDetails((prev) => ({
      ...prev,
      [name]: name === "cookingTime" ? parseInt(value) || 0 : value
    }))
  }

  const handleIngredientChange = (e,idx) => {
    const {value} = e.target;
    const newIngredientsArr = recipeDetails?.ingredients;
    newIngredientsArr[idx] = value;
    setRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: newIngredientsArr
      }
    })
  }
  const handleAdd = (e) => {
    e.preventDefault();
    setRecipeDetails({...recipeDetails,ingredients:[...recipeDetails?.ingredients,""]})
  }

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipe",recipeDetails,{
        headers: {
          authorization: cookies.access_token
        }
      });
      alert("Recipe created successfully");
      setRecipeDetails({
        name: "",
        description: "",
        ingredients: [],
        imageUrl: "",
        cookingTime: 0,
        createdBy: 0,
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  console.log("rec -> ",recipeDetails);
  return (
    <div className="bg-gray-400">
      <h2>Create Recipe</h2>
      <form action="" className='w-3/6 mx-auto'>
        {/* name */}
        <div className='flex flex-col my-10 mx-auto'>
          <label
            htmlFor="name"
            className='text-2xl text-yellow'
          >Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.name}
            onChange={(e) => handleChange(e)} />
        </div>
        {/* description */}
        <div className='flex flex-col my-10 mx-auto'>
          <label
            htmlFor="description"
            className='text-2xl text-yellow'
          >Description/Instructions</label>
          <textarea
            name="description"
            id="description"
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.description}
            onChange={(e) => handleChange(e)} />
        </div>
        {/* ingredients */}
        <div className='flex flex-col my-10 mx-auto'>
          <label
            htmlFor="ingredients"
            className='text-2xl text-yellow'
          >Ingredients</label>
          <button type="button" onClick={handleAdd} className="bg-black text-white">Add Ingredient</button>
          {/* display no of ingredients */}
          {recipeDetails?.ingredients?.map((ingredient, i) => {
            return (
              <input
                key={i}
                type="text"
                name="ingredients"
                id="ingredients"
                className='w-2/5 mx-auto mt-4 p-2'
                value={ingredient}
                onChange={(e) => handleIngredientChange(e,i)} />
            )
          })}
        </div>
        {/* image Url */}
        <div className='flex flex-col my-10 mx-auto'>
          <label
            htmlFor="imageUrl"
            className='text-2xl text-yellow'
          >Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.imageUrl}
            onChange={(e) => handleChange(e)} />
        </div>
        {/* cooking time */}
        <div className='flex flex-col my-10 mx-auto'>
          <label
            htmlFor="cookingTime"
            className='text-2xl text-yellow'
          >Cooking Time</label>
          <input
            type="number"
            name="cookingTime"
            id="cookingTime"
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.cookingTime}
            onChange={(e) => handleChange(e)} />
        </div>
        <button 
          type="submit" 
          onClick={handleAddRecipe} 
          className="bg-black text-white">Add recipe</button>
      </form>
    </div>
  )
}

export default AddRecipe
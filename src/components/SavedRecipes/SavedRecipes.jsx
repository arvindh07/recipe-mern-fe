import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useGetUserId } from '../../hooks/useGetuserId'

const SavedRecipes = () => {
  const [savedRecipes,setSavedRecipes] = useState([]);
  const userId = useGetUserId();

  useEffect(() => {
    const getSavedRecipes = async() => {
      try {
        const response = await axios.get(`https://recipe-be-fd7h.onrender.com/recipe/saved-recipes/user/${userId}`);
        console.log("rrr",response);
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.log(error);
      }
    }
    getSavedRecipes();
  }, [])

  return (
    <div className='mx-auto'>
        <h1>Welcome to see recipes that ur co-chef have created</h1>
        {savedRecipes.map((recipe,idx) => {
          return (
            <div key={idx} className="border-orange-500 border-4 m-5 w-fit">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              {recipe?.ingredients?.map((ingredient,idx) => {
                return (
                  <h4 key={idx * 2}>{ingredient}</h4>
                )
              })}
              <img src={recipe?.imageUrl} alt="" className='w-80 h-80' />
              <p>Cooking Time: {recipe?.cookingTime}</p>
            </div>
          )
        }
        )}
    </div>
  )
}

export default SavedRecipes
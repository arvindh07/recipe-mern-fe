import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useGetUserId } from '../../hooks/useGetuserId';


const Home = () => {
  const [recipes,setRecipes] = useState([]);
  const [savedRecipes,setSavedRecipes] = useState([]);
  const userId = useGetUserId();
  const [cookies, setCookies] = useCookies(["access_token"]);

  console.log("ckies -> ",cookies);
  useEffect(() => {
    const getRecipes = async() => {
      try {
        const response = await axios.get("https://recipe-be-fd7h.onrender.com/recipe");
        console.log("bbb -> ",response);
        setRecipes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    const getSavedRecipes = async() => {
      try {
        const response = await axios.get(`https://recipe-be-fd7h.onrender.com/recipe/saved-recipes/${userId}`);
        console.log("rrr",response);
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.log(error);
      }
    }

    getRecipes();
    if(cookies.access_token) getSavedRecipes();
  }, [])

  const handleSave = async (recipeId) => {
    try {
      const response = await axios.put("https://recipe-be-fd7h.onrender.com/recipe",{
        userId,
        recipeId
      },{
        headers:{authorization:cookies.access_token}
      });
      alert("Recipe saved successfully...");
      console.log("ssss -> ",response.data);
      setSavedRecipes(response.data.savedRecipes);
    } catch (error) {
      console.log(error);
    }
  }
  
  const isSavedRecipe = (recipeId) => savedRecipes ? savedRecipes.includes(recipeId) : false;
  console.log("saved -> ",savedRecipes);
  return (
    <div className='mx-auto'>
        <h1>Welcome to see recipes that ur co-chef have created</h1>
        {recipes.map((recipe,idx) => {
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
              <button 
                onClick={() => handleSave(recipe._id)}
                className="bg-black text-white"
                disabled={isSavedRecipe(recipe._id)}
                >
                  {isSavedRecipe(recipe._id) ? "Already Saved" : "Save"}
                </button>
            </div>
          )
        }
        )}
    </div>
  )
}

export default Home
import React, { useState } from 'react'

const AddRecipe = () => {
  const [recipeDetails,setRecipeDetails] = useState({
    name:"",
    description:"",
    ingredients:[],
    instructions:"",
    imageUrl:"",
    cookingTime:""
  })
  const handleChange = () => {

  }
  
  return (
    <div>
      <h2>Create Recipe</h2>
      <form action="" className='w-3/6 mx-auto'>
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
            onChange={(e) => handleChange(e)}/>
        </div>
        <div className='flex flex-col my-10 mx-auto'>
          <label 
            htmlFor="description"
            className='text-2xl text-yellow'
          >Name</label>
          <textarea 
            name="description" 
            id="description" 
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.description}
            onChange={(e) => handleChange(e)}/>
        </div>
        <div className='flex flex-col my-10 mx-auto'>
          <label 
            htmlFor="ingredients"
            className='text-2xl text-yellow'
          >Name</label>
          <input 
            type="text" 
            name="ingredients" 
            id="ingredients" 
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.ingredients}
            onChange={(e) => handleChange(e)}/>
        </div>
        <div className='flex flex-col my-10 mx-auto'>
          <label 
            htmlFor="instructions"
            className='text-2xl text-yellow'
          >Name</label>
          <input 
            type="text" 
            name="instructions" 
            id="instructions" 
            className='w-2/5 mx-auto mt-4 p-2'
            value={recipeDetails.ingredients}
            onChange={(e) => handleChange(e)}/>
        </div>
      </form>
    </div>
  )
}

export default AddRecipe
import React, { useState } from 'react'
import axios from "axios";

const Register = () => {
  const [registerDetails,setRegisterDetails] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setRegisterDetails((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("form -> ",registerDetails);
    try{
      await axios.post("http://localhost:3001/auth/register",{
        username:registerDetails?.email,
        password:registerDetails?.password
      })

      alert("User registered successfully");
      setRegisterDetails({
        email:"",
        password:""
      })
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className="bg-gray-500 h-screen w-3/6">
      <h2 className='text-3xl py-4'>Register</h2>
      <form action="" className='w-3/6 mx-auto'>
        <div className='flex flex-col my-10 mx-auto'>
          <label 
            htmlFor="email"
            className='text-2xl text-yellow'
          >Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className='w-2/5 mx-auto mt-4 p-2'
            value={registerDetails.email}
            onChange={(e) => handleChange(e)}/>
        </div>
        <div className='flex flex-col my-10 mx-auto'>
          <label 
            htmlFor="password"
            className='text-2xl text-yellow'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            className='w-2/5 mx-auto mt-4 p-2'
            value={registerDetails.password}
            onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <button 
            className='px-6 py-4 bg-black text-white text-1xl'
            onClick={(e) => handleSubmit(e)}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username: loginDetails?.email,
        password: loginDetails?.password
      })

      console.log("resp -> ", response);
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-gray-500 h-screen w-3/6">
      <h2 className='text-3xl py-4'>Login</h2>
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
            value={loginDetails.username}
            onChange={(e) => handleChange(e)} />
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
            value={loginDetails.password}
            onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <button
            className='px-6 py-4 bg-black text-white text-1xl'
            onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
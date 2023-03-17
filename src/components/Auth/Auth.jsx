import React from 'react'
import Login from '../Login/Login'
import Register from "../Register/Register"

const Auth = () => {
  return (
    <div className='flex w-full'>
        <Login/>
        <Register />
    </div>
  )
}

export default Auth
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const[cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    console.log("coo -> ",cookies);
    const logout  = () => {
        setCookies("access_token","");
        window.localStorage.removeItem("userId");
        navigate("/auth");
    }
    return (
        <nav className='flex justify-evenly content-center bg-black p-4 text-white text-xl'>
            <div className='flex'>
                <p className='text-2xl font-bold text-blue-500'>RRRecipEEE</p>
            </div>
            <div>
                <ul className='flex justify-between'>
                    <Link to="/" className='px-2'>
                        Home
                    </Link>
                    <Link to="/createrecipe" className='px-2'>
                        Create Recipe
                    </Link>
                    <Link to="/savedrecipes" className='px-2'>
                        Saved Recipes
                    </Link>
                </ul>
            </div>
            <div className='flex'>
                {!cookies.access_token ?
                    (<ul className='px-2'>
                        <Link to="/auth">Login/ Register</Link>
                    </ul>) :
                    (<ul className='px-2'>
                        <button onClick={logout}>Logout</button>
                    </ul>
                )}
            </div>

        </nav>
    )
}

export default Navbar
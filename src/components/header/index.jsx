import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 place-content-center'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='w-content mt-2 px-3 py-2 text-gray-900 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300'>Logout</button>
                    </>
                    :
                    <>
                        {/* <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Sign Up</Link> */}
                    </>
            }

        </nav>
    )
}

export default Header
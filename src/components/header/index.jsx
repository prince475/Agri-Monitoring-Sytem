import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import logo from '../../assets/kenya.png'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-16 place-content-center bg-white'>
                <> 
                    <div className="absolute top-0 left-0">
                        <div className="flex items-center  p-4 bg-gray-100 shadow-md rounded-md ">
                            <img src={logo} alt="Logo" className="w-8 h-8 ml-2" />
                            <h3 className="text-black text-xl font-bold sm:text-2xl">AgriMonitoring System</h3>
                        </div>
                    </div>
                </>

            {
                userLoggedIn
                    ?
                    <>
                        <div className='absolute top-0 right-0'>
                            <button onClick={() => { doSignOut().then(() => { navigate('*') }) }} className='flex items-center w-content mt-2 px-3 py-2 text-gray-900 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300 relative'>Logout</button>
                        </div>
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
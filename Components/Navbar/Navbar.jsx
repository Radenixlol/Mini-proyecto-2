import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 class='text-red-600 text-4x1 font-bold  cursor-pointer'> NETFLIX</h1>
        <div>
            <Link to='/'>
            <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/Register_link'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
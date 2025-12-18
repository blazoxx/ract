import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[#202020] flex items-center justify-between my-2.5 mx-3.75 py-5 px-10 rounded-[10px]'>
        <h3 className='text-[20px]'>theB</h3>
        <div className='flex gap-6.25 items-center'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/product">Product</Link>
        </div>
      </nav>
  )
}

export default Navbar;
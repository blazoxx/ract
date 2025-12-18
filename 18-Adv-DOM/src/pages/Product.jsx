import React from 'react'
import Men from './Men.jsx'
import Women from './Women.jsx'
import Kids from './Kids.jsx'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      {/* <h1 className='center-absolute-text'>Products Page</h1> */}
      <h2 className='flex justify-center items-center underline gap-5 mt-5'>
        <Link to="/product/men"> Men's Collection </Link>
        <Link to="/product/women">  Women's Collection </Link>
        <Link to="/product/kids">  Kid's Collection </Link>
      </h2>
      <Outlet />
    </div>
  )
}

export default Product
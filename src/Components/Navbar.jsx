import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white bg-opacity-80 shadow-md font-poppins">
      <div className="text-2xl font-bold text-slate-800">SparkNest</div>
      <ul className="flex gap-6 text-slate-700 font-medium text-base">
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link to='/' className='hover:text-blue-700'>Home</Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link to='/profile' className='hover:text-blue-700'>Profile</Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link to='/create-post' className='hover:text-blue-700'>Create</Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link to='/terms' className='hover:text-blue-700'>Terms</Link>
        </li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 font-semibold cursor-pointer">
        Login
      </button>
    </nav>
  )
} 

export default Navbar;
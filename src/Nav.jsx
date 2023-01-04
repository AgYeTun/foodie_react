import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (

    <div className='flex justify-between items-center bg-blue-100 py-1 my-5 rounded-lg'>
        <Link to='/'>
          <div className='flex gap-1 items-center ml-5'>
              <RiRestaurant2Fill className='text-2xl'/>
              <p className='text-xl font-bold text-gray-600'>Foodie</p>
          </div>
        </Link>
          
        <div className='mr-5'>
            <ul className='flex gap-3 '>
                <li className='cursor-pointer text-black hover:text-gray-600'>Home</li>
                <li className='cursor-pointer text-black hover:text-gray-600'>About</li>
                <li className='cursor-pointer text-black hover:text-gray-600'>Service</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
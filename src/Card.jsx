import React from 'react'
import {GoInfo} from 'react-icons/go'
import {Link} from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-56 border rounded-xl flex justify-center items-center flex-col gap-5 p-4 hover:scale-105 ease-in-out duration-200 shadow hover:shadow-lg'>
        <img src={meal.strMealThumb} className='w-52 rounded' alt="" />
        <h1 className='h-10 text-center'>{meal.strMeal}</h1>
        <Link to={`/detail/${meal.idMeal}`}>
            <button className='flex items-center gap-1 bg-blue-200 py-1 px-3 rounded hover:bg-blue-400 ease-in-out duration-300'><GoInfo/>Detail</button>
        </Link>
    </div>
  )
}

export default Card
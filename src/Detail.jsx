import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './Loader/Loading'

const Detail = () => {

  const {id} = useParams()

  const [meal,setMeal] = useState({})

  const [isLoading,setIsLoading] = useState(true)

  const getSingleMeal = async() => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    // console.log(data.meals[0]);
    setMeal(data?.meals[0])
    setIsLoading(false)
  }

  useEffect(() => {
    getSingleMeal()
  },[])

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className='flex flex-col gap-5'>
          <img src={meal.strMealThumb} alt="" className='w-[500px] rounded-xl shadow-xl' />
          <div className='flex gap-2'>
            <div className='text-gray-600 bg-blue-200 w-20 text-center text-sm rounded p-1'>{meal.strCategory}</div>
            <div className='text-gray-600 bg-yellow-200 w-20 text-center text-sm rounded p-1'>{meal.strArea}</div>
          </div>
          <h1 className='text-2xl'>{meal.strMeal}</h1>
          <div>
            <h2 className='text-2xl mb-2'>Instruction</h2> 
            <p className='tracking-wider leading-6 text-gray-500'>{meal.strInstructions}</p>
            <div className='flex items-center gap-3'>
                <a href={meal.strYoutube}><AiFillYoutube className='text-red-600 text-4xl'/></a>
                <p className='text-gray-500'>Watch on Youtube</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
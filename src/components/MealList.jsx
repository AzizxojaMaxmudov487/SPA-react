import React from 'react'
import MealItem from './MealItem'
import { useNavigate } from 'react-router-dom'

export default function MealList(props) {
    const {strCategory} = props
    const {meals} = props
  const navigate = useNavigate()
  const goBack = () => {
      navigate(-1)
  }

  const navigate2 = useNavigate()
  const goDalshi = () => {
      navigate2(+1)
  }

   return (
    <>
    <h1>{
        'Category:' + strCategory
    }</h1>
    <button className='btn' onClick={goBack}>Go Back</button>
    <button className='btn' onClick={goDalshi}>Go Dalshi</button>
    <div className='list'>
        {meals.map(meal => (
            <MealItem key={meal.idMeal} {...meal}/>
        ))}
    </div>
    </>
  )
}
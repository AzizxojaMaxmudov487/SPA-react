import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFilterCategory} from '../api'
import Loading from '../components/Loading'
import MealList from '../components/MealList'

export default function Category() {
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name])
  return (
    <>
        {!meals.length ? <Loading/> : <MealList meals={meals}/>}
    </> 
  )
}

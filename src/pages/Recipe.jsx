import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api'
import Loading from '../components/Loading'

export default function Recipe() {

    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    const {id} = useParams()

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const handleRecipeShow = () => {
        setShowRecipe(!showRecipe)
    }

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])

  return (
    <>
    <button className='btn' onClick={goBack}>Go Back</button>
    {!recipe.idMeal ? <Loading/> : (
        <div className='recipe'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6><b>Category:</b> {recipe.strCategory}</h6>
            {recipe.strArea ? <h6><b>Area:</b>{recipe.strArea}</h6> : null }
            <p>{recipe.strInstructions}</p>
            <button onClick={handleRecipeShow} className='btn'>Show Recipe</button>
            {showRecipe ? (
                <table className='centred'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Meansure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(recipe).map(key => {
                            if(key.includes('Ingredient') && recipe[key]){
                                return(
                                    <tr>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeansure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            ) : null}

            {recipe.strYoutube ? (
                <div className='row'>
                    <h5>Video Recipe</h5>
                    <iframe src={`https://youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id}></iframe>
                </div>
            ) : null}
        </div>
    )}
    </>
  )
}

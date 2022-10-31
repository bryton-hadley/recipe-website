import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import SearchRecipe from "./SearchRecipe"

const HomeScreen = () => {  
  
  const [recipes, setRecipes] = useState([])
  const url = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    axios
        .get(`${url}/recipes`)
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}

useEffect(() => {
    getRecipes()
},[])

  return (
    <div>
      <AdBanner />
      <SearchRecipe recipes={recipes} />
    </div>
  )
}

export default HomeScreen
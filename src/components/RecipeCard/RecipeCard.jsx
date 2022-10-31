import React from "react";
import { useNavigate, Navigate} from "react-router-dom";
import styles from "./RecipeCard.module.css"

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className={styles.recipe_card} >
            <div>
                <div className={styles.recipe_img_container}>
                    {/* <image src={styles.img_url} /> */}
                     <img src={recipe.image_url} /> 
                </div>
                <h3>{recipe.recipe_name}</h3>
            </div>
            <button className="blue-btn" onClick={handleClick}>See More</button>
        </div>
    )
}


export default RecipeCard;

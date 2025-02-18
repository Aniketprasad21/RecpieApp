import React, { useState } from 'react';
import "../Style/RecpieList.css";

const RecpieList = ({ recipes }) => {
    const [selctedRecipe, setSelectedRecipe] = useState(null);

    const handleShowIngredient = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
    };

    return (
        <>
            <div className="recipe-cards">
                {recipes.map((r, index) => (
                    <div className="card" key={index}>
                                                
                        <img
                            className="card-img-top"
                            src={r.recipe.image}
                            alt={r.recipe.label}
                            style={{
                                width:"18rem",
                                margin:"1rem",
                                cursor:"pointer"
                            }}
                            onClick={()=>window.open(r.recipe.url,"_blank")}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{r.recipe.label}</h5>
                            <p className="card-text">
                                <strong>Calories: </strong> {Math.round(r.recipe.calories)} Kcal <br />
                                <strong>Cuisine: </strong> {r.recipe.cuisineType.join(", ")} <br />
                                <strong>Diet Labels: </strong> {r.recipe.dietLabels.join(", ")}
                            </p>
                            <button className='commonButton' onClick={() => handleShowIngredient(r.recipe)}>
                                Show Ingredients
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selctedRecipe && 
                <div className='modal'>
                    <div className='model-content'>
                        <span className='close-button' onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{selctedRecipe.label}</h2>
                        <ul className="ul-container">
                            {selctedRecipe.ingredientLines.map((ingredient, index) => (
                                <li className="list-content" key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
};

export default RecpieList;

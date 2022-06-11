import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle';

const RecipeCardComp = ({recipe}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Recipe-App/details", {state:{recipe}})
  }
  return (
    <RecipeCard>
      <RecipeHeader>
        {recipe.label}
      </RecipeHeader>
      <RecipeImage src={recipe.image} />
      <Button onClick={handleClick} >View More</Button>
    </RecipeCard>
  )
}

export default RecipeCardComp
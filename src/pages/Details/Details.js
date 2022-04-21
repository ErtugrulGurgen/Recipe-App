import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles';
import dietSvg from "../../assets/diet.svg"

const Details = () => {
  const location = useLocation();
  const recipeDetail = location.state.recipe
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipeDetail.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
        <>Nutrients</>
          <p>
            {recipeDetail.totalNutrients.CA.label} :
            {Math.round(recipeDetail.totalNutrients.CA.quantity)}
            {recipeDetail.totalNutrients.CA.unit}
          </p>
          <p>
            {recipeDetail.totalNutrients.CHOCDF.label} :
            {Math.round(recipeDetail.totalNutrients.CHOCDF.quantity)}
            {recipeDetail.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipeDetail.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipeDetail.totalNutrients.CHOLE.quantity)}
            {recipeDetail.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipeDetail.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipeDetail.totalNutrients.ENERC_KCAL.quantity)}
            {recipeDetail.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipeDetail.totalWeight}</p>
          <p>Calories: {Math.round(recipeDetail.calories)}</p>
          {recipeDetail.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
        <img src={recipeDetail.image} alt={recipeDetail.label} />
        </ImgContainer>
        <IngredContainer>
          {recipeDetail.ingredientLines.map((ingred, index)=>(
            <p key={index}>
            {index + 1} {"==>"} {ingred}
            </p>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  )
}

export default Details
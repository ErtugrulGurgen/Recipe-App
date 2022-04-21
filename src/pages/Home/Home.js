import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const APP_ID = "2e805f43";
const APP_Key = "276d610530797fbe2082057e8095d4dc";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealType[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}&mealType=${meal}`;
  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealType={mealType}
        setMeal={setMeal}
      />
      {food ? (
        <MainContainer>
          {food.map((item, index) => (
            <RecipeCardComp key={index} recipe={item.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;

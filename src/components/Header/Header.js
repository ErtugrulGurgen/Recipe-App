import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyles";

const Header = ({setQuery, setMeal, getData, mealType}) => {
  return (
    <div>
      <HeaderContainer>
        <MainHeader>Food App</MainHeader>
        <Form 
        setQuery={setQuery}
        getData = {getData}
        mealType = {mealType}
        setMeal={setMeal}
        />
      </HeaderContainer>
    </div>
  );
};

export default Header;

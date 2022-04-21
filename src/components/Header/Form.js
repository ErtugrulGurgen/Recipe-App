import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ setQuery, setMeal, getData, mealType }) => {
  const handleSubmit = (e) => {
      e.preventDefault();
      getData();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
      <Select
        name="mealType"
        id="mealType"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealType.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;

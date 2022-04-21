import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const user = {
    username:"user"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "/home";
  }
  return (
    <LoginContainer>
      <FormContainer>
      <StyledImg src={meal}/>
      <Header>{"<Clarusway/>"}Recipe</Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder='username' required/>
        <StyledInput type="password" placeholder='password' required/>
        <StyledButton type='submit'>LOGIN</StyledButton>
      </StyledForm>

       
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
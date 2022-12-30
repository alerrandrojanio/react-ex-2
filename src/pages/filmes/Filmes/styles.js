import styled from "styled-components"

export const Title = styled.h1`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const LinkContainer = styled.div`
  width: 100%;
  max-width: 80px;
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  text-decoration: none;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    a {
      color: #58417d;
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  gap: 1rem;
`

export const Input = styled.input`
  max-width: 450px;
  outline: none;
`

export const Paragraph = styled.p`
  display: flex;
  gap: 1rem;
  align-content: left;
  font-size: 16px;
`

export const Span = styled.span`
  margin-left: 4px;
`

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem;
`

export const Movie = styled.div`
  /* 
  height: 270px;
  text-decoration: none;
  
  border-radius: 8px; */
  max-width: 430px;
  width: 200px;
  height: 280px;
  background: #58417d;
  display: block;
  text-align: center;
  padding: 1rem;
  margin: auto;
  border-radius: 8px;

  img {
    width: 120px;
    cursor: pointer;
    transition: width 0.2s;
    margin-right: 16px;
    border-radius: 8px;
  }

  img:hover {
    width: 130px;
  }

  p {
    height: 20px;
    text-align: center;
    font-size: 16px;
    margin-top: 8px;
    margin-right: 16px;
  }

  li {
    list-style-type: none;
  }
`

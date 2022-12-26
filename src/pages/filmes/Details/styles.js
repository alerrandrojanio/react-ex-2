import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  max-width: 80px;
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  text-decoration: none;
`;

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
`;

export const Input = styled.input`

`;

export const Span = styled.span`
  font-size: 18px;
  color: #FFF;
  font-size: 16px;
  margin-left: 4px;
`;

export const ContainerMovie = styled.div` 
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 3rem;

  img {
    height: 500px;
    border-radius: 8px;
  }

`;

export const Overview = styled.div`
  h2 {
    margin-bottom: 2rem;
  }

  /* p:first-child {
    margin-top: 1rem;
  } */

  p {  
    text-align: left;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;


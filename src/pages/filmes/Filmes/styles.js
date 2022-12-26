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
  max-width: 450px;
  outline: none;
`;

export const Paragraph = styled.p`
  display: flex;
  gap: 1rem;
  align-content: left;
  font-size: 16px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #FFF;
  font-size: 16px;
  margin-left: 4px;
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-content: center;
  margin: 2rem
`;

export const Movie = styled.div`
  max-width: 270px;
  position: relative;
  display: block;
  height: 102%;  
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  background: #58417D;
  border-radius: 8px;
  padding-top: 1rem;
  padding-right: 1rem;

  img {
    width: 120px;
    cursor: pointer;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    transition: width 0.2s;
    margin-left: 15px;
  }

  img:hover{
    width: 130px;
    
  }

  p {
    text-transform: capitalize;
    height: 20px;
    margin-top: 8px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 1rem;
  }

  li {
    list-style-type: none;
    
  }
`;

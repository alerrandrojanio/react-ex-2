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

export const BookList = styled.div`
  display: grid;
  width: 95%;
  max-width: 100rem;
  min-width: 5rem;
  margin-left: 1rem;
`;

export const Book = styled.div`
  background-color: #58417D;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  li {
    list-style: none;
  }
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


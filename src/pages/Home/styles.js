import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const LinkContainer = styled.div`
  width: 100%;
  max-width: 85px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 2rem;
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

export const BookList = styled.div`
  display: grid;
  width: 95%;
  max-width: 100rem;
  min-width: 5rem;
  margin-left: 1rem;
`

export const Book = styled.div`
  background-color: #58417d;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  li {
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
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

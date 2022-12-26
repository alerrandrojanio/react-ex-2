import { useState, useEffect } from 'react'

import { FiUser, FiBook, FiSearch, FiArrowRight } from 'react-icons/fi'
import { Link } from "react-router-dom"

import { Title, BookList, Book, Paragraph, InputContainer, Input, LinkContainer, Span } from "./styles"

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const title = process.env.REACT_APP_TITLE_BOOKS;

  const base_url = "https://hn.algolia.com/api/v1/search?query=X";

  useEffect(() => {
    fetch(base_url)
      .then(response => response.json())
      .then(data => setBooks(data.hits))
  }, [])

  function handleSearch(e) {
    e.preventDefult();


  }

  return (
    <>
      <Title>
        {title}
      </Title>
      
      <LinkContainer>
        <Link to={'/filmes'} style={{ textDecoration: 'none', color: 'white' }}>
          <Span>Filmes</Span>
          <FiArrowRight color="#FFF" size={'18px'} />
        </Link>
      </LinkContainer>
      
      <InputContainer className='form-group'>
        <Input
          type="text"
          className='form-control'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit" className='btn btn-primary' onClick={handleSearch}>
          <FiSearch color="#FFF" />
        </button>
      </InputContainer>
    
      <BookList>
        {books.map(book => {
          return (
            <Book>
              <ul>
                <li>
                  <Paragraph>
                    <FiBook size={'24px'}/>
                    {book.title}
                  </Paragraph>
                  <Paragraph>
                    <FiUser size={'24px'}/>
                    {book.author}
                  </Paragraph>
                </li>
              </ul>
            </Book>
          )
        })}
    </BookList>
  </>
    
  );
}

export default Home;
import React, { useState, useEffect } from 'react'

import { FiSearch, FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom"


import { Title, LinkContainer, InputContainer, Input, Span, MovieContainer, Movie } from "./styles"

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]); 

  const api_key = process.env.REACT_APP_API_KEY;
  const title = process.env.REACT_APP_TITLE;

  const image_path = "https://image.tmdb.org/t/p/w500";
  const search_path = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  console.log({movies});

  function handleSearch(e) {
    e.preventDefault();
    
    if (search == "") {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }
    else {
      setSearch(search.replace(" ", "+"));

      fetch(`${search_path}${search}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
      
      setSearch(search.replace("+", " "));
    }
  }

  return (
    <>
      <Title>
        {title}
      </Title>
      
      <LinkContainer>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
          <FiArrowLeft color="#FFF" size={'18px'} />
          <Span>Livros</Span> 
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

      <MovieContainer>
        {movies.map(movie => {
          return (
            <Movie>
              <ul>
                <li>
                  <Link to={`/details/${movie.id}`}>
                    <img src={`${image_path}${movie.poster_path}`} alt="" />
                  </Link>
                  <p>{movie.title}</p>
                </li>
              </ul>
            </Movie>
          )
        })}
      </MovieContainer>
    </>
    
    
    // <div className="App">
    //   <h1 className="mt-3">{title}</h1>
    //   <div className='form-group'>
    //     <input
    //       type="text"
    //       className='form-control'
    //       value={search}
    //       onChange={e => setSearch(e.target.value)}
    //     />
    //     <button type="submit" className='btn btn-primary' onClick={handleSearch}>
    //       <FiSearch color="#FFF" />
    //     </button>
    //   </div>
      
    //   <div className="container">
    //     <div className="movie-list">
    //       {movies.map(movie => {
    //         return (
    //           <div className="movie">
    //             <ul>
    //               <li>
    //                 <Link to={`/details/${movie.id}`}>
    //                   <img src={`${image_path}${movie.poster_path}`} alt="" />
    //                 </Link>
    //                 <p>{movie.title}</p>
    //               </li>
    //             </ul>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Movies;

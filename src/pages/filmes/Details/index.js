import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Title, Span, LinkContainer, ContainerMovie, Overview } from "./styles";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;
  const title = process.env.REACT_APP_TITLE;

  const image_path = "https://image.tmdb.org/t/p/w500";
  const movie_path = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`;

  useEffect(() => {
    fetch(movie_path)
      .then(response => response.json())
      .then(data => setMovie(data))
  }, [])
  
  return (
    <Container>
      <Title>{title}</Title>
      <LinkContainer>
        <Link to={'/filmes'} style={{ textDecoration: 'none', color: 'white' }}>
          <FiArrowLeft color="#FFF" size={'18px'} />
          <Span>Voltar</Span>
        </Link>
      </LinkContainer>
      
      <ContainerMovie>
        <img src={`${image_path}${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />
          <Overview>
            <h2>{movie.title}</h2>
            <p className="date" style={{ color: '#C0C0C0' }}>Data de Lançamento: {movie.release_date}</p>
            <p>Sinopse:</p>
            <p className="overview">{movie.overview}</p>
          </Overview>
      </ContainerMovie>
    </Container>
  )
}

export default Details;

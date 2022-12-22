import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  const image_path = "https://image.tmdb.org/t/p/w500";
  const movie_path = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`;

  useEffect(() => {
    fetch(movie_path)
      .then(response => response.json())
      .then(data => setMovie(data))
  }, [])
  
  return (
    <div>
      <h1>Pagina</h1>
      <div className="container">
        <img src={`${image_path}${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />
        <div className="details">
          <h2>{movie.title}</h2>
          <p className="date">{movie.release_date}</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
      

      <Link to={'/'}>Voltar</Link>
    </div>
    
  )
}

export default Details;
import { useEffect, useState } from "react"
import { Header } from "./Header"

import { FiSearch } from "react-icons/fi"

export function Movies() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState<any[]>([])

  const api_key = import.meta.env.VITE_APP_API_KEY

  const image_path = "https://image.tmdb.org/t/p/w500"
  const search_path = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`

  useEffect(() => {
    if (search === "") {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
    } else {
      fetch(`${search_path}${search}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
    }
  }, [search])

  return (
    <>
      <Header text="movies" />

      <div className="w-80 h-9 bg-violet-800 rounded-lg m-auto mt-3 p-1 flex items-center justify-center gap-5">
        <FiSearch />
        <input
          type="text"
          className="border-none outline-none bg-transparent w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 my-6">
        {movies.map((movie, i) => {
          return (
            <div
              key={`${movie}-${i}`}
              className="w-48 h-72 bg-violet-800 border border-white rounded-lg overflow-hidden "
            >
              <img
                src={`${image_path}${movie.poster_path}`}
                alt=""
                className="w-32 m-auto mt-6 rounded-sm hover:scale-110 transition-transform"
              />
              <p className="text-center font-medium mt-2 px-6">{movie.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

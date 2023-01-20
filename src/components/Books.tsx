import { useState, useEffect } from "react"
import axios from "axios"

import { Header } from "../components/Header"

import { FiUser, FiBook, FiSearch } from "react-icons/fi"

export function Books() {
  const [books, setBooks] = useState<any[]>([])
  const [search, setSearch] = useState("")

  const base_url = `https://hn.algolia.com/api/v1/search?query=${search}`

  useEffect(() => {
    axios.get(base_url).then((response) => setBooks(response.data.hits))
  }, [search])

  return (
    <>
      <Header text="books" />

      <div className="w-80 h-9 bg-violet-800 rounded-lg m-auto mt-3 p-1 flex items-center justify-center gap-5">
        <FiSearch />
        <input
          type="text"
          className="border-none outline-none bg-transparent w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 mx-10 my-6">
        {books.map((book, i) => {
          return (
            <div
              key={`${book}-${i}`}
              className="h-24 bg-violet-800 border border-white rounded-lg px-5 py-3"
            >
              <div className="flex flex-row gap-2">
                <FiBook size={"24px"} />
                <p>
                  <a
                    href={book.url}
                    target="_blank"
                    className="font-medium hover:text-violet-300"
                  >
                    {book.title}
                  </a>
                </p>
              </div>
              <div className="flex flex-row gap-2 mt-4">
                <FiUser size={"24px"} />
                <p>{book.author}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

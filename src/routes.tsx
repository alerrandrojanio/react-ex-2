import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { MovieIndex } from "./pages/MovieIndex"
import { BookIndex } from "./pages/BookIndex"

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookIndex />} />
        <Route path="/movies" element={<MovieIndex />} />
      </Routes>
    </Router>
  )
}

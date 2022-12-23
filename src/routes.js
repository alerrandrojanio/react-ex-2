import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Filmes from './pages/filmes/Filmes';
import Details from './pages/filmes/Details';

export default function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes/>} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    );
}
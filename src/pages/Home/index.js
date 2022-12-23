import { useState, useEffect } from 'react'

import {  } from 'react-icons/fi'
import { Link } from "react-router-dom"

import { Title } from "./styles"

const Home = () => {
  const title = process.env.REACT_APP_TITLE_BOOKS;
  
  return (
    <Title>
      {title}
    </Title>
  );
}

export default Home;
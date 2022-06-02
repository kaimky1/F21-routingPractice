import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

import '../UI/button.css'
import '../UI/header.css'


const Header = () => {
  return (
    <header className="header">
        <Link to="/">
            <button className="button">Home</button>
        </Link>
        <Link to="/about">
            <button className="button">About</button>
        </Link>
        <Link to="/favorite">
            <button className="button">Favorite Stocks</button>
        </Link>
        <Link to="/contact">
            <button className="button">Contact</button>
        </Link>
    </header>

  )
}

export default Header
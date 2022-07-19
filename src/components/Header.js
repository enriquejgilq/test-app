import React from 'react'
import { useNavigate } from 'react-router-dom';
import './components.css'
//componente header que es aplicado globalmente para usar enrutamiento
function Header() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`)
  }
  const goFavorites = () => {
    navigate(`/favorites`)
  }

  const goCharacters = () => {
    navigate(`/details`)
  }
  return (
    <nav class="menu-bar">
      <div class="group">
        <a class="item title" onClick={goHome} >Inicio</a>
      </div>
      <div class="group">
        <a class="item" onClick={goCharacters} >Ver lista de personajes</a>
        <a class="item" onClick={goFavorites} >Ver favoritos</a>
      </div>
    </nav>
  )
}

export default Header



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
    <div className='header'>
      <p onClick={goHome}><b>Inicio</b></p>
      <p onClick={goCharacters}><b>Ver lista de personajes </b></p>
      <p onClick={goFavorites}><b>Ver favoritos </b></p>
    </div>
  )
}

export default Header



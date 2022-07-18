import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { favoritesCharacters } from '../Redux/selectors/app'
import { addFavorites, removeFavorites } from '../Redux/actions/app'

function ListCharacters({ list }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const favorites = useSelector(favoritesCharacters)
//funcion de redireccion a los detalles, se pasa el "id" como parametro en el url para consultar la api y mostrar sus detalles 
  const goToDetails = (e) => {
    navigate(`/details/character/${e}`)
  }
//funcion agregar a favoritos
  const addToFavorites = (e) => {
    {
      var id = e,
        index = favorites.indexOf(id);
      if (!id) return;
      if (index == -1) {
        favorites.push(id);
      } else {
        favorites.splice(index, 1);
      }
      dispatch(addFavorites(favorites))
      window.alert('Personaje agregado')
    }
  }
  //funcion remover de favoritos 
  const removeToFavorites = (e) => {
    var myArr = favorites;
    var index = favorites.findIndex(function (o) {
      return o.id === e.id;
    })
    if (index !== -1) myArr.splice(index, 1);
    dispatch(removeFavorites(favorites))
    window.alert('Personaje eliminado')
  }

  return (
    <div>
      {list.characters.results.map((item) => (
        <div className='ListCharacters'  >
          <li>{item.name}</li>
          <img src={item.image} />
          <button type='button' onClick={() => goToDetails(item.id)} > Ver detalles</button>
          <button type='button' onClick={() => addToFavorites(item)}> Agregar a favoritos</button>
          {favorites.map((fav)=> (<> {fav.id=== item.id && <button type='button' onClick={() => removeToFavorites(item)}>  Quitar a favoritos</button>}</>))}
        </div>
      ))
      }
    </div>
  )
}

export default ListCharacters
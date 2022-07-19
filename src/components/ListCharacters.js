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
          <div className='profile'>
            <img className='img' src={item.image} />
            <h2>{item.name}</h2>
          </div>
          <div className='btn'>
            <a class="my-button" onClick={() => goToDetails(item.id)} >Ver detalles</a>
            <a class="my-button" onClick={() => addToFavorites(item)}> Agregar a favoritos</a>
            {favorites.map((fav) => (<> {fav.id === item.id && <a class="my-button" onClick={() => removeToFavorites(item)}>  Quitar a favoritos</a>}</>))}
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ListCharacters
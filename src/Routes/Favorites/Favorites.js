import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { favoritesCharacters } from '../../Redux/selectors/app'

function Favorites() {
    const navigate = useNavigate()
    const favorites = useSelector(favoritesCharacters)
    const goToCharacters = () => {
        navigate('/details')
    }

    if (favorites.length === 0) {
        return <>
            <p> Su lista de favoritos esta vacia!</p>
            <a class="my-button" onClick={goToCharacters}> Lista de personajes</a>
              </>
    }
    return (
        <div className='ListFavorites' >
            {favorites.map((item) => (
                <div className='child'  >
                    <h2>{item.name}</h2>
                    <img className='img' src={item.image} />
                </div>
            ))}
        </div>
    )
}

export default Favorites
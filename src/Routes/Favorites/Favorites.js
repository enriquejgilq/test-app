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
            <button onClick={goToCharacters}> Lista de personajes</button>
              </>
    }
    return (
        <div className='ListFavorites' >
            {favorites.map((item) => (
                <div className='child'  >
                    <li>{item.name}</li>
                    <img src={item.image} />
                </div>
            ))}
        </div>
    )
}

export default Favorites
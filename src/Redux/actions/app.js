import { GET_CHARACTERS_REQUEST, GET_CHARACTER_ID_REQUEST, FAVORITE_CHARACTER, ELIMINATE_FAVORITE_CHARACTER } from '../constants/app'
//accion todos los personajes
export const getAllCharacters = data => {
    return {
        type: GET_CHARACTERS_REQUEST,
        data
    }
}
//accion detalles del personaje
export const getCharacterId = data => {
    return {
        type: GET_CHARACTER_ID_REQUEST,
        data
    }
}
//agregar a favorito
export const addFavorites = data => {
    return {
        type: FAVORITE_CHARACTER,
        data
    }
}
//remover favorito
export const removeFavorites = data => {
    return {
        type: ELIMINATE_FAVORITE_CHARACTER,
        data
    }
}
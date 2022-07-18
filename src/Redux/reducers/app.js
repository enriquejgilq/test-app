import { initialStateApp } from '../states/app';
import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTER_ID_REQUEST,
  FAVORITE_CHARACTER,
  ELIMINATE_FAVORITE_CHARACTER
} from '../constants/app'
//reducer que permiten guardar la data de los personajes, detalles y favoritos
export default function toDoApp(state = initialStateApp, action) {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        allCharacters: action.data,
      };
    }
    case GET_CHARACTER_ID_REQUEST: {
      return {
        ...state,
        detailCharacters: action.data
      }
    }
    case FAVORITE_CHARACTER: {
      return {
        ...state,
        favorites: action.data
      }
    }
    case ELIMINATE_FAVORITE_CHARACTER:{
      return{
        ...state,
        favorites: action.data
      }
    }
    default:
      return state;
  }
}
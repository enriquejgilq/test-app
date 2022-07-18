export const appState = state => state.appState;
//estado de todos los personajes 
export const allCharactersSelector = state => appState(state).allCharacters;
//detalles del personaje
export const listCharacterSelector = state => appState(state).detailCharacters
//favoritos
export const favoritesCharacters = state => appState(state).favorites
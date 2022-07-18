import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'
//vista principal de la app-  y navegacion usando react-router-dom

function Home() {
	const navigate = useNavigate()
	//funciones de redireccionamento
	const goOtherTest = () => {
		navigate(`/other-test`)
	}
	const goToCharacters = () => {
		navigate('/details')
	}
	const goToFavorites = () => {
		navigate('/favorites')
	}

	return (
		<div className='home'>
			<div className='child' >
				<button onClick={goToCharacters}> Lista de personajes</button>
				<button onClick={goOtherTest}> Ejercicios</button>
				<button onClick={goToFavorites}> Ver favoritos</button>
			</div>
		</div>
	)
}

export default Home
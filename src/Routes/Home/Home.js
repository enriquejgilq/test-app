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
				<a class="my-button" onClick={goToCharacters}> Lista de personajes</a>
				<a class="my-button" onClick={goOtherTest}> Ejercicios</a>
				<a class="my-button" onClick={goToFavorites}> Ver favoritos</a>
			</div>
		</div>
	)
}

export default Home
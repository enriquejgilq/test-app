import { Button } from '@mui/material';
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
				<Button variant='contained' className='stylebtn'   onClick={goToCharacters}> Lista de personajes   </Button>
				<Button variant='contained' className='stylebtn'  onClick={goOtherTest}> Ejercicios  </Button>
				<Button variant='contained' className='stylebtn'   onClick={goToFavorites}> Lista de personajes   </Button>
			</div>
		</div>
	)
}

export default Home
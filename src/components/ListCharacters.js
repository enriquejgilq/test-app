import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { favoritesCharacters } from '../Redux/selectors/app'
import { addFavorites, removeFavorites } from '../Redux/actions/app'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import styles from './new.module.scss'
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
const Img = styled('img')({
	borderRadius: '50%',
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});


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
	const onAddFavorites = (event, value) => {
		if (event) {
			dispatch(addFavorites([...favorites, value]))
		} else {
			const newList = favorites.map((item) => item === value ? null : item).filter(Boolean)
			dispatch(removeFavorites(newList))
		}
	}

	return (
		<div  >
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{list.characters.results.map((item, index) => (
						<Grid item xs={12} sm={3} md={3} key={index}>
							<Item>
								<h2>{item.name}</h2>
								<Img alt="complex" src={item.image} />
								<div className={styles.btnGroup}>
									<Button className={styles.btn} onClick={() => goToDetails(item.id)}> Ver detalles</Button>
									<Checkbox
										value={item}
										onChange={(e) => onAddFavorites(e.target.checked, item)} />
								</div>
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>

	)
}

export default ListCharacters
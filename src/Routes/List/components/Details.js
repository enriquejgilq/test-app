import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterId } from "../../../Redux/actions/app";
import { listCharacterSelector } from "../../../Redux/selectors/app";
import { gql, useQuery } from "@apollo/client";

function Details() {
	//se obtiene el id como parametro en la url
	let { id } = useParams();
	const dispatch = useDispatch();
	const list = useSelector(listCharacterSelector);
	//query para consumir los datos de la api
	const DETAIL_CHARACTER = gql`
  query {
    character(id: ${id}) {
      id
      name
      status
      species
      type
      gender
      created
      created
      image
    }
  }
 `;
	const { data, error, loading } = useQuery(DETAIL_CHARACTER);
	useEffect(() => {
		if (data) {
			dispatch(getCharacterId(data?.character));
		}
	}, [data]);

	if (loading) {
		return <p> Cargando...</p>;
	}
	if (error) {
		return <p> Error...</p>;
	}
	return (
		<div className="content">
			<div className="child">
				<p>
					<b>Nombre: </b>
					{list.name}
				</p>
				<img className="img" src={list.image} />
				<p>
					<b>Status: </b>
					{list.status}
				</p>
				<p>
					<b>Especie: </b>
					{list.species}
				</p>
				<p>
					<b>Especie: </b>
					{/** si el type no esta definido se establece un mensaje "sin informacion" */}
					{list.type === "" ? "Sin información" : list.type}
				</p>
				<p>
					<b>Genero: </b>
					{list.gender}
				</p>
				<p>
					<b>Creado: </b>
					{list.created}
				</p>
			</div>
		</div>
	);
}

export default Details;

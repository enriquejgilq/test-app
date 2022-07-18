import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../Redux/actions/app";
import ListCharacters from "../../components/ListCharacters";
import { gql, useQuery } from "@apollo/client";
//consulta a todos los personajes de rickandmorthy
const ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function List() {
        const { data, error, loading } = useQuery(ALL_CHARACTERS);
        const dispatch = useDispatch();
        //funcion para hacer el dispacth y guardar los resultados en el store
        useEffect(() => {
                if (data) {
                        dispatch(getAllCharacters(data.characters.results));
                }
        }, [data]);
        //si loadiang es verdadero me cambia a un mensaje "cargando"
        if (loading) {
                return <p> Cargando...</p>;
        }
        //en caso de error, me muestra un mensaje de error
        if (error) {
                return <p> Error al realizar la consulta...</p>;
        }
        return (
                <div className='content'>
                        <div className='child' >
                                {/** componente que me muestra la lista de personajes, se le pasa como prop la lista de personajes almacenados en el store */}
                         <ListCharacters list={data} />
                        </div>
                </div>
        );
}

export default List;

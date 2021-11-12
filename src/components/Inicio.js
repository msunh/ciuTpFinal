import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Fragment } from "react";
import Tarjetas from "./Tarjetas";
import Paginar from "./Paginar";
import Buscar from "./Buscar";
import axios from "axios";

/*la funcionFetch sirve para poder realizar llamadas de red, haciendo un request a la api,
para consumir la informacion y recibe la url
la url devuelve un "promise", una lista de personajes
con el then obtenemos una respuesta y la debemos convertir a un objeto de JScript
porque viene en formato json, con el segundo "then" ya tengo mis datos en forma de objeto de js*/

function Inicio() {
  /*uso un useState permite colocar un estado a la app que estamos creando 
  el useState nos retorna la variable de estado (personajes, que es un array) y setPersonajes, es la funcion
  que modifica ese estado */

  const [personajes, setPersonajes] = useState([]); /* como estado inicial arranca vacio */
  const [texto, setTexto] = useState("");
  const [paginacion, setPaginacion] = useState([]); /* mi state para almacenar los next y prev que vienen de la api */

  const linkPersonaje = `https://rickandmortyapi.com/api/character/?name=${texto}`;

  /* creo una funcion fetch para llamarla desde el hook 'useEffect'*/
  const funcionFetch = (link) => {
    fetch(link)
      .then((respuesta) => respuesta.json())
      .then((datosDeLaApi) => {
        setPersonajes(datosDeLaApi.results); /* almaceno los datos de los personajes que me trae la api*/
        setPaginacion(datosDeLaApi.info);     /* almaceno la info que me trae la api donde estan los 'next' y 'prev' */
      }

      ) /* aca le paso el array con los personajes */
      .catch((error) =>
        console.log(error)
      ); /*en caso de error lo capturamos y lo mostramos en consola*/
  };

  // const funcionFetch = async (link) => {
  //   try {
  //     const datosDeLaApi = (await axios.get(link)); // await  : espera a obtener respuesta con datos esperados
  //     //console.log(datosDeLaApi);

  //     setPersonajes(datosDeLaApi.data.results); /* almaceno los datos de los personajes que me trae la api*/
  //     setPaginacion(datosDeLaApi.data.info);
  //   } catch (error) {
  //     console.log(error);
  //     setPersonajes([])
  //   }
  // };

  /*uso el hook, "useEffect" que nos permite manejar la llamada de red a la api,*/
  useEffect(() => {
    funcionFetch(linkPersonaje);
  }, [linkPersonaje]); /* se coloca [] cuando el componente se renderiza */

  /* funciones para ser utilizadas en paginacion */
  const atras = () => {
    funcionFetch(paginacion.prev);
  };

  const siguiente = () => {
    funcionFetch(paginacion.next);
  };

  console.log(personajes)

  return (
    <Fragment>
      <div className="container">
        <Buscar texto={texto} setTexto={setTexto} />
        <hr />
        <Tarjetas propiedad={personajes} nombreIngresado={texto} />
        {/* le mando el array de personajes a mi componente hijo como una prop */}
        <Paginar prop1={atras} prop2={siguiente} />
        {/* le envio como props la info de mis next y prev a mi componente hijo de paginar */}
      </div>
    </Fragment>
  );
}

export default Inicio;

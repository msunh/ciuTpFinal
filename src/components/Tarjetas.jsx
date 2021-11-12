import React from "react";
import "./Tarjeta.css";

//debajo del div "row" abro llaves para crear codigo js
//es para iterar personajes para crear las columnas usando la propiedad que en
//este caso es el array de personajes, uso map
//valor = es cada personaje en el array que estamos recibiendo y al que le puedo "preguntar" propiedades
//row =  uso esta clase de bootstrap que son las filas
//col = y esta son las columnas que estan dentro de la iteracion
//key= es una propiedad que recibe el indice, desde el 0 en adelante
// y dentro de la columna creo la tarjeta con la clase "card" de bootstrap

const Tarjetas = ({ propiedad, nombreIngresado }) => {


  if (propiedad === undefined)
    return (
      <h2 className="text-center text-white ">
        Lo siento amigo, no hay personajes con el nombre "{nombreIngresado}"
      </h2>
    );
  else
    return (
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {propiedad.map((valor, indice) => (
              <div key={indice} class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={valor.image} alt="" />
                    </div>
                    <div className="text-container">
                      <h6>{valor.name}</h6>
                      <p> Especie: {valor.species}</p>
                      <p> Tipo: {valor.type}</p>
                      <p> Origen: {valor.origin.name}</p>
                      <p> Origen: {valor.location.name}</p>
                      <p>{valor.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Tarjetas;





  // viejas tarjetas
  // if (propiedad === undefined)
  //   return (
  //     <h2 className="text-center text-white ">
  //       Lo siento amigo, no hay personajes con el nombre "{nombreIngresado}"
  //     </h2>
  //   );
  // else
  //   return (
  //     <div className="row">
  //       {propiedad.map((valor, indice) => (
  //         <div key={indice} className="col mb-1">
  //           <div className="text-white mb-3" style={{ minWidth: "300px" }}>
  //             <img src={valor.image} alt="" />
  //             <div className="card-body ">
  //               <h5 className="card-title text-decoration-underline">
  //                 {valor.name}
  //               </h5>
  //               <p> Especie: {valor.species}</p>
  //               <p> Origen: {valor.origin.name}</p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
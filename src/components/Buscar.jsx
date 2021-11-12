import React from "react";

const Buscar = ({ texto, setTexto }) => {

  const entrada = (evento) => {  //(handleImputChange) esta funcion "captura" el valor (value) escrito en el input
    setTexto(evento.target.value);
  };

  const enviarDatos = (evento) => {
    evento.preventDefault(); // evita comportamiento por defecto
  };

  return (
    <nav className="navbar justify-content-center">
      <form className="row" onSubmit={enviarDatos}>  
        <div className="col-md-8 my-5">
          <input
            className="form-control"
            placeholder="Ingrese un personaje"
            type="text"
            name="nombre"
            value={texto}
            onChange={entrada} //este evento on change esta al pendiente cada vez que  yo escriba algo y se va ejecutar esta funcion
            
          />
        </div>
        {/* <div className="col-md-3">
          <button className="btn btn-primary my-5" type="submit" >
            Buscar
          </button>
        </div> */}
      </form>
    </nav>
  );
};

export default Buscar;


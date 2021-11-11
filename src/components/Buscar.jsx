import React from "react";

/* const Buscar = ({ texto, setTexto }) => {

  const entrada = ({ target }) => {
    setTexto(target.value);
  };

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center }">
      <form className="form-inline my-5">
        <input
          className="form-control mr-sm-2"
          type="text"
          name="nombre"
          placeholder="Ingresá el nombre de un personaje"
          value={texto}
          onChange={entrada}
        />
      </form>
    </nav>
  );
};

export default Buscar; */

const Buscar = ({ texto, setTexto }) => {

  const entrada = (evento) => {  //(handleImputChange) esta funcion "captura" el valor (value) escrito en el input
    setTexto(evento.target.value);
  };

  const enviarDatos = (evento) => {
    evento.preventDefault();
  };

  return (
    <nav className="navbar justify-content-center">
      <form className="row"  >  
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
        <div className="col-md-3">
          <button className="btn btn-primary my-5" type="submit" >
            Buscar
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Buscar;

import React from "react";

const Barra = ({ texto, setTexto }) => {

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

export default Barra;

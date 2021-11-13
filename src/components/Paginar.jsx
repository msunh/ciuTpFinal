import React from "react";

const Paginar = ({ prop3, prop1, prop2 }) => {
  //mis funciones de paginacion que se van a ejecutar cuando hago clic en el boton
  //obteniendo las propiedades que vienen del componente padre
  const atras = () => {
    prop1();
  };

  const adelante = () => {
    prop2();
  };

  return (
    <div>
      <div className="row mb-4 p-4 justify-content-center">

        {prop3 !== undefined ? (
          <div className="col-md-3 offset-1">
            <button className="boton" onClick={atras}>
              Atrás
            </button>
          </div>
        ) : null}

        {prop3 !== undefined ? (
          <div className="col-md-3">
            <button className="boton" onClick={adelante}>
              Siguiente
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Paginar;

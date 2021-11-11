import React from "react";

const Paginar = ({ prop1, prop2 }) => {

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
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="btn btn-outline-light" onClick={atras}>
            Atrás
          </button>
        </li>
        <li className="page-item">
          <button className="btn btn-outline-light" onClick={adelante}>
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginar;

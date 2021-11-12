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
    <div >

    <div className="row mb-5 p-5 justify-content-center">
      
      <div className="col-md-3 offset-2">

            

          <button className="boton"  onClick={atras}>
            Atrás
          </button>

      </div>
      <div className="col-md-3">
          <button className="boton" onClick={adelante}>
            Siguiente
          </button>
      </div>

    </div>

    
    </div>
  );
};

export default Paginar;

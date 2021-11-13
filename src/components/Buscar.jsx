import "./Style.css";

const Buscar = ({ texto, setTexto }) => {

  const entrada = (evento) => { // esta funcion funciona con un evento "captura" el valor (value) escrito en el input
    setTexto(evento.target.value);
  };

  const enviarDatos = (evento) => {
    evento.preventDefault(); // cancela el evento, lo que significa que cualquier acción por defecto suceder como resultado de este evento, no ocurrirá. 
  };

  return (
    <nav className="navbar justify-content-center">
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-12">
          <input
            className="form-control inputConLogo bordesInput"
            placeholder="Ingrese un personaje"
            type="text"
            name="nombre"
            value={texto}
            onChange={entrada} //este evento on change esta al pendiente cada vez que  yo escriba algo y se va ejecutar la funcion entrada
          />
        </div>
      </form>
    </nav>
  );
};

export default Buscar;

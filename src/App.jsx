import { useState } from "react";

function Formulario({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (texto.trim() === "") return;

    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;
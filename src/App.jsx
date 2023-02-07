import React from "react";

const App = () => {
  const name = "victor";
  const ape = "leiva";
  const edad = 19;
  const snombre = "manuel";

  return (
    <div className="contenedor">
      <div className="cajadatos">
      <h1 className="h1">Datos</h1>
        <div className="caja-Dh">
          <p>name:{name}</p>
          <p>apellido:{ape}</p>
          <p>edad:{edad}</p>
          <p>Segundo Nombre:{snombre}</p>
        </div>
        <button className="b1">Ver mas</button>
      </div>
    </div>
  );
};

export default App;

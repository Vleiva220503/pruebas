import Boton from "./components/Boton";

const App = () => {
  const c = "correo";
  const p = "password";

  return (
    <div className="contenedor">
      <h2 className="l">Empresa</h2>
      <p className="l">--Ingrese sus credenciales--</p>
      <form id="forma" name="forma" method="POST">
        <div className="p">
          <input
            className="c"
            placeholder="Correo"
            type="text"
            id="correo"
            name="correo"
            required="true"
          />
        </div>

        <div className="p">
          <input
            className="c"
            placeholder="Contraseña"
            type="password"
            id="password"
            name="password"
            required="true"
          />
        </div>

        <button className="b1">Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default App;

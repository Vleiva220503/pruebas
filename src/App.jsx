import { useState } from "react";
import Boton from "./components/Boton";

const App = () => {
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleSubmit = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="contenedor">
      <h2 className="h2">Iniciar Sesion</h2>
      <form onSubmit={submit} id="forma" name="forma" method="POST">
        <div className="email">
          <input
            className="in"
            placeholder="Email o number"
            type="text"
            id="correo"
            name="correo"
            value={form.correo}
            required="true"
            onChange={handleSubmit}
          />
        </div>

        <div className="email">
          <input
            className="in"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleSubmit}
            required="true"
          />
        </div>
        <div className="l">
          <div>
            <input type="checkbox" />
            <label>Recuerdame</label>
          </div>

          <label className="p">Necesitas Ayuda?</label>
        </div>

        <button type="submit" className="b1">Iniciar Sesion</button>
        <div className="c">
          Esta paginna esta protegida por google recapacha para comprobar que no
          eres un robot
        </div>
      </form>
    </div>
  );
};

export default App;

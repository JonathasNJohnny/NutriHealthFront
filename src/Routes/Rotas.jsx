import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import MenuInicialAdministrador from "../Pages/SistemaAdministrador/MenuInicialAdministrador";
import CadastroUsuarios from "../Pages/SistemaAdministrador/CadastroUsuarios";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route
          path="/administrador/menu"
          element={<MenuInicialAdministrador />}
        />
      </Routes>
      <Routes>
        <Route
          path="/administrador/cadastrar-usuario"
          element={<CadastroUsuarios />}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;

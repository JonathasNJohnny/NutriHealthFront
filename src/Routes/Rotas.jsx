import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import MenuInicialAdministrador from "../Pages/SistemaAdministrador/MenuInicialAdministrador";
import CadastroUsuarios from "../Pages/SistemaAdministrador/CadastroUsuarios";
import ListaCadastros from "../Pages/SistemaAdministrador/ListaCadastros";

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
      <Routes>
        <Route
          path="/administrador/lista-usuarios"
          element={<ListaCadastros />}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;

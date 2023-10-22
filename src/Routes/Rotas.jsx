import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import MenuInicialAdministrador from "../Pages/SistemaAdministrador/MenuInicialAdministrador";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route
          path="/menu/administrador"
          element={<MenuInicialAdministrador />}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import MenuInicialAdministrador from "../Pages/SistemaAdministrador/MenuInicialAdministrador";
import CadastroUsuarios from "../Pages/SistemaAdministrador/CadastroUsuarios";
import ListaCadastros from "../Pages/SistemaAdministrador/ListaCadastros";
import MenuInicialRecepcionista from "../Pages/SistemaRecepcionista/MenuInicialRecepcionista";
import AgendarConsulta from "../Pages/SistemaRecepcionista/AgendarConsulta";
import CadastroPaciente from "../Pages/SistemaRecepcionista/CadastroPaciente";
import ListaPacientes from "../Pages/SistemaRecepcionista/ListaPacientes";
import MenuInicialMedico from "../Pages/SistemaMedico/MenuInicialMedico";
import ListaConsultasMedico from "../Pages/SistemaMedico/ListaConsultasMedico";
import RelatorioConsultaCadastro from "../Pages/SistemaMedico/RelatorioConsultaCadastro";

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

      <Routes>
        <Route
          path="/recepcionista/menu"
          element={<MenuInicialRecepcionista />}
        />
      </Routes>

      <Routes>
        <Route
          path="/recepcionista/agendar-consulta"
          element={<AgendarConsulta />}
        />
      </Routes>

      <Routes>
        <Route
          path="/recepcionista/cadastrar-paciente"
          element={<CadastroPaciente />}
        />
      </Routes>

      <Routes>
        <Route
          path="/recepcionista/lista-pacientes"
          element={<ListaPacientes />}
        />
      </Routes>

      <Routes>
        <Route path="/medico/menu" element={<MenuInicialMedico />} />
      </Routes>
      <Routes>
        <Route
          path="/medico/gerenciamento-consultas/lista"
          element={<ListaConsultasMedico />}
        />
      </Routes>
      <Routes>
        <Route
          path="/medico/gerenciamento-consultas/relatorio/:idConsulta"
          element={<RelatorioConsultaCadastro />}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;

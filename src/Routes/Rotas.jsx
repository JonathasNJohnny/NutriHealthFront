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
import SolicitarAgendamentoPaciente from "../Pages/SistemaPaciente/SolicitarAgendamentoPaciente";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/administrador/menu"
          element={<MenuInicialAdministrador />}
        />
        <Route
          path="/administrador/cadastrar-usuario"
          element={<CadastroUsuarios />}
        />
        <Route
          path="/administrador/lista-usuarios"
          element={<ListaCadastros />}
        />
        <Route
          path="/recepcionista/menu"
          element={<MenuInicialRecepcionista />}
        />
        <Route
          path="/recepcionista/agendar-consulta"
          element={<AgendarConsulta />}
        />
        <Route
          path="/recepcionista/cadastrar-paciente"
          element={<CadastroPaciente />}
        />
        <Route
          path="/recepcionista/lista-pacientes"
          element={<ListaPacientes />}
        />
        <Route path="/medico/menu" element={<MenuInicialMedico />} />
        <Route
          path="/medico/gerenciamento-consultas/lista"
          element={<ListaConsultasMedico />}
        />
        <Route
          path="/medico/gerenciamento-consultas/relatorio/:idConsulta"
          element={<RelatorioConsultaCadastro />}
        />

        <Route
          path="/paciente/consultas/solicitar-agendamento"
          element={<SolicitarAgendamentoPaciente />}
        />
      </Routes>
    </Router>
  );
}

export default Rotas;

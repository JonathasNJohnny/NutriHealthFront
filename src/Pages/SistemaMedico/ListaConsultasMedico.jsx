import React, { useState } from "react";
import {
  ContainerPrincipalPagina,
  ColLista,
  DivTituloLista,
  DivConteudoLista,
  TableStyled,
  IconStyled,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ListaConsultasMedico = () => {
  const [consultas, setConsultas] = useState([
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 1,
    },
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 2,
    },
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 3,
    },
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 4,
    },
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 5,
    },
    {
      pacienteNome: "Engels",
      data: "12/11/2023",
      motivoConsulta: "Qualquer",
      idConsulta: 6,
    },
  ]);

  return (
    <ContainerPrincipalPagina fluid id="container_principal">
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Médico"}
        PaginaDoSistema={"Lista de Consultas"}
      />
      <Row style={{ marginTop: "25px" }}>
        <ColLista md={12}>
          <DivTituloLista>Consultas Agendadas</DivTituloLista>
          <DivConteudoLista>
            <TableStyled>
              <thead>
                <th>Paciente</th>
                <th>Data</th>
                <th>Motivo</th>
                <th style={{ textAlign: "center" }}>Ação</th>
              </thead>

              <tbody>
                {consultas.map((item) => (
                  <tr key={item.idConsulta}>
                    <td>{item.pacienteNome}</td>
                    <td>{item.data}</td>
                    <td>{item.motivoConsulta}</td>
                    <td style={{ textAlign: "center" }}>
                      <NavLink
                        to={`/medico/gerenciamento-consultas/relatorio/${item.idConsulta}`}
                      >
                        <IconStyled
                          className="icon-menu"
                          icon="fluent:notepad-edit-16-regular"
                          height={24}
                        />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableStyled>
          </DivConteudoLista>
        </ColLista>
      </Row>
    </ContainerPrincipalPagina>
  );
};

export default ListaConsultasMedico;

import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [consultas, setConsultas] = useState([]);

  const listUsers = async () => {
    try {
      const response = await axios.get("/api/getAppointments");
      if (response.status === 200) {
        console.log(response.data)
        setConsultas(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar os usuários: " + error);
    }
  };

  useEffect(() => {
    listUsers();
  }, []);//

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
                  <tr key={item.appointmentID}>
                    <td>{item.patientName}</td>
                    <td>{item.date}</td>
                    <td>{item.reason}</td>
                    <td style={{ textAlign: "center" }}>
                      <NavLink
                        to={`/medico/gerenciamento-consultas/relatorio/${item.appointmentID}`}
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

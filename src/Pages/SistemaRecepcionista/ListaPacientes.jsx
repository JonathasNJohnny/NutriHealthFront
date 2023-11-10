import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContainerPrincipalPagina,
  ColLista,
  DivTituloLista,
  DivConteudoLista,
  TableStyled,
  DivButtonNovo,
  ButtonNovo,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Col, Row } from "react-bootstrap";

const ListaPacientes = () => {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    try {
      const response = await axios.get("/api/getUsers");
      if (response.status === 200) {
        const data = response.data;
        const patientUsersList = data.filter(users => users.userType === "Paciente");
        console.log(patientUsersList)
        setUsers(patientUsersList);
      } else {
        console.error("Erro ao buscar os usuários.");
      }
    } catch (error) {
      console.error("Erro ao buscar os usuários: " + error);
    }
  };
  
  useEffect(() => {
    listUsers();
  }, []);
  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Recepcionista"}
        PaginaDoSistema={"Lista de Pacientes"}
      />
      <Row style={{ marginTop: "25px" }}>
        <ColLista md={9}>
          <DivTituloLista>Pacientes Cadastrados</DivTituloLista>
          <DivConteudoLista>
            <TableStyled>
              <thead>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.userID}>
                    <td>{user.username}</td>
                    <td>{user.city} - {user.state}<br/> {user.neighborhood} - {user.street}</td>
                    <td>{user.number}</td>
                  </tr>
                ))}
              </tbody>
            </TableStyled>
          </DivConteudoLista>
        </ColLista>
        <Col>
          <DivButtonNovo>
            <ButtonNovo to={"/recepcionista/cadastrar-paciente"}>
              Novo
            </ButtonNovo>
          </DivButtonNovo>
        </Col>
      </Row>
    </ContainerPrincipalPagina>
  );
};

export default ListaPacientes;

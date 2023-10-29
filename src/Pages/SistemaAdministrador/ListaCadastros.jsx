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

const ListaCadastros = () => {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    try {
      const response = await axios.get("/api/getUsers");
      if (response.status === 200) {
        const data = response.data;
        setUsers(data);
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
        TipoDeUsuarioSistema={"Administrador"}
        PaginaDoSistema={"Lista de Usuários"}
      />
      <Row style={{ marginTop: "25px" }}>
        <ColLista md={9}>
          <DivTituloLista>Usuários Cadastrados</DivTituloLista>
          <DivConteudoLista>
            <TableStyled>
              <thead>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id}>
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
            <ButtonNovo to={"/administrador/cadastrar-usuario"}>
              Novo
            </ButtonNovo>
          </DivButtonNovo>
        </Col>
      </Row>
    </ContainerPrincipalPagina>
  );
};

export default ListaCadastros;

import React from "react";
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
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
                <tr>
                  <td>Engels</td>
                  <td>Patos - PB - Rua Teste</td>
                  <td>83999999999</td>
                </tr>
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

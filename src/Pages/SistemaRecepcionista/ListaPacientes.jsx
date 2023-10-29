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

const ListaPacientes = () => {
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

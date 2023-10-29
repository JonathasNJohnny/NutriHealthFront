import React from "react";
import {
  ContainerPrincipalPagina,
  FormControlPagsGerais,
  RowConteudoPagina,
  TituloInput,
  BoxGroupInput,
  ButtonSalvar,
  DivButtonSalvar,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Col, Row } from "react-bootstrap";

const CadastroPaciente = () => {
  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Recepcionista"}
        PaginaDoSistema={"Cadastro de Paciente"}
      />

      <RowConteudoPagina>
        <Col md={6}>
          <BoxGroupInput>
            <TituloInput>Nome</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Número de Celular</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>

          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Cidade</TituloInput>
                <FormControlPagsGerais />
              </BoxGroupInput>
            </Col>

            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Uf</TituloInput>
                <FormControlPagsGerais />
              </BoxGroupInput>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Bairro</TituloInput>
                <FormControlPagsGerais />
              </BoxGroupInput>
            </Col>

            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Rua</TituloInput>
                <FormControlPagsGerais />
              </BoxGroupInput>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <BoxGroupInput>
            <TituloInput>CPF</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Email</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>

          <DivButtonSalvar style={{ height: "174px" }}>
            <ButtonSalvar>Salvar</ButtonSalvar>
          </DivButtonSalvar>
        </Col>

        {/* <Row className="justify-content-end">
          <Col className="col-auto">
            <ButtonSalvar>Salvar</ButtonSalvar>
          </Col>
        </Row> */}
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default CadastroPaciente;

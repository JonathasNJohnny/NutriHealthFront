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
import { FormatData } from "../../Utils/FormatacaoDeDados/FormatData";
import { FormatHorario } from "../../Utils/FormatacaoDeDados/FormatHorario";

const AgendarConsulta = () => {
  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Administrador"}
        PaginaDoSistema={"Cadastro de Usuários"}
      />

      <RowConteudoPagina>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Data</TituloInput>
                <FormControlPagsGerais
                  maxLength="10"
                  onKeyDown={(e) => {
                    if (e.key !== "Backspace") {
                      const valorFormatado = FormatData(e.target.value);
                      e.target.value = valorFormatado;
                    }
                  }}
                />
              </BoxGroupInput>
            </Col>

            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Horário</TituloInput>
                <FormControlPagsGerais
                  maxLength="5"
                  onKeyDown={(e) => {
                    if (e.key !== "Backspace") {
                      const valorFormatado = FormatHorario(e.target.value);
                      e.target.value = valorFormatado;
                    }
                  }}
                />
              </BoxGroupInput>
            </Col>
          </Row>

          <BoxGroupInput>
            <TituloInput>Paciente</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Médico</TituloInput>
            <FormControlPagsGerais />
          </BoxGroupInput>
        </Col>
        <Col md={6}>
          <BoxGroupInput>
            <TituloInput>Motivo da Consulta (Opcional)</TituloInput>
            <FormControlPagsGerais as="textarea" className="textarea_form" />
          </BoxGroupInput>

          <DivButtonSalvar>
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

export default AgendarConsulta;

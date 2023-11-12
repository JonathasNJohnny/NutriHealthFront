import React, { useEffect } from "react";
import {
  BoxGroupInput,
  ContainerPrincipalPagina,
  FormControlPagsGerais,
  RowConteudoPagina,
  TituloInput,
  InputFileStyled,
  DivButtonSalvar,
  ButtonSalvar,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";

const RelatorioConsultaCadastro = () => {
  const { idConsulta } = useParams();

  useEffect(() => {
    if (idConsulta !== "" && idConsulta !== undefined) {
      console.log(`id da consulta: ${idConsulta} (apenas para fins de teste)`);
    }
  }, [idConsulta]);

  return (
    <ContainerPrincipalPagina fluid id="container_principal">
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Médico"}
        PaginaDoSistema={"Relatorio da Consulta"}
      />
      <RowConteudoPagina>
        <Row
          style={{
            justifyContent: "space-between",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Col md={3}>
            <BoxGroupInput>
              <TituloInput>Nome do Paciente</TituloInput>
              <FormControlPagsGerais disabled value={"Nome Paciente"} />
            </BoxGroupInput>
          </Col>
          <Col md={3}>
            <BoxGroupInput>
              <TituloInput>Data da Consulta</TituloInput>
              <FormControlPagsGerais
                disabled
                style={{ textAlign: "center" }}
                value={"12/11/2023"}
              />
            </BoxGroupInput>
          </Col>
        </Row>

        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col md={12}>
            <BoxGroupInput>
              <TituloInput>Relatorio da Consulta</TituloInput>
              <FormControlPagsGerais as="textarea" className="textarea_form" />
            </BoxGroupInput>
          </Col>
        </Row>

        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col md={5}>
            <BoxGroupInput style={{ marginBottom: "0px" }}>
              <InputFileStyled type="file" id="anexoDeArquivo" />
              <label htmlFor="anexoDeArquivo">
                Anexar arquivo
                <Icon
                  icon="material-symbols:upload"
                  color="white"
                  height={24}
                  style={{ marginRight: "15px" }}
                />
              </label>
            </BoxGroupInput>
          </Col>
        </Row>
        <Row style={{ padding: "0px", margin: "0px" }}>
          <Col md={12}>
            <DivButtonSalvar>
              <ButtonSalvar
                onClick={() => {
                  alert("sem funcao ainda");
                }}
              >
                Salvar
              </ButtonSalvar>
            </DivButtonSalvar>
          </Col>
        </Row>
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default RelatorioConsultaCadastro;

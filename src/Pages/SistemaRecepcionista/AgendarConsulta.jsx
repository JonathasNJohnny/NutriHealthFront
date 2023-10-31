import React, { useState } from "react";
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
import AutoComplete from "../../Components/AutoComplete";

const AgendarConsulta = () => {
  const [teclaPressionada, setTeclaPressionada] = useState("");

  const [optionsAutoComplete1, setOptionsAutoComplete1] = useState([
    //APENAS UMA BASE, AS OPTIONS VIRAO DO BANCO DE DADOS
    { nome: "Engels", id: 0 },
    { nome: "João Vitor", id: 1 },
    { nome: "Kauã", id: 2 },
    { nome: "Danilo", id: 3 },
    { nome: "Jonathas", id: 4 },
    { nome: "Teste 1", id: 5 },
    { nome: "Teste 2", id: 6 },
    { nome: "Teste 3", id: 7 },
  ]);

  const [optionsAutoComplete2, setOptionsAutoComplete2] = useState([
    //APENAS UMA BASE, AS OPTIONS VIRAO DO BANCO DE DADOS
    { nome: "Teste 2", id: 0 },
    { nome: "Teste 3", id: 1 },
    { nome: "Teste 4", id: 2 },
    { nome: "Teste 5", id: 3 },
    { nome: "Teste 6", id: 4 },
    { nome: "Teste 7", id: 5 },
    { nome: "Teste 8", id: 6 },
    { nome: "Teste 9", id: 7 },
  ]);

  const handleSelectOptionSearch1 = (value) => {
    console.log(value);
  };

  const handleSelectOptionSearch2 = (value) => {
    console.log(value);
  };

  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Recepcionista"}
        PaginaDoSistema={"Agendamento de consultas"}
      />

      <RowConteudoPagina>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Data</TituloInput>
                <FormControlPagsGerais
                  maxLength="10"
                  onKeyDown={(e) => setTeclaPressionada(e.key)}
                  onChange={(e) => {
                    if (teclaPressionada !== "Backspace") {
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
                  onKeyDown={(e) => setTeclaPressionada(e.key)}
                  onChange={(e) => {
                    if (teclaPressionada !== "Backspace") {
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
            <AutoComplete
              options={optionsAutoComplete1}
              handleSelectOptionSearch={handleSelectOptionSearch1}
            />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Médico</TituloInput>
            <AutoComplete
              options={optionsAutoComplete2}
              handleSelectOptionSearch={handleSelectOptionSearch2}
            />
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

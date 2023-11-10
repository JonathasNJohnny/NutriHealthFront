import React, { useState, useEffect } from "react";
import axios from "axios";
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
  //Auto-Complete - Start
  const [teclaPressionada, setTeclaPressionada] = useState("");
  const [optionsAutoComplete1, setOptionsAutoComplete1] = useState([]);
  const [optionsAutoComplete2, setOptionsAutoComplete2] = useState([]);

  const listUsers = () => {
    axios
      .get("/api/getUsers")
      .then((resp) => {
        const data = resp.data;
        const patientUsersList = data
          .filter((users) => users.userType === "Paciente")
          .map((user) => ({ nome: user.username, id: user.userID }));
        const medicUsersList = data
          .filter((users) => users.userType === "Medico")
          .map((user) => ({ nome: user.username, id: user.userID }));
        console.log(patientUsersList);
        console.log(medicUsersList);
        setOptionsAutoComplete1(patientUsersList);
        setOptionsAutoComplete2(medicUsersList);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuários: " + error);
      });
  };

  useEffect(() => {
    listUsers();
  }, []);

  const handleSelectOptionSearch1 = (value) => {
    console.log(value);
  };

  const handleSelectOptionSearch2 = (value) => {
    console.log(value);
  };
  //Auto-Complete - End

  //Create Appointment - Start
  //Create Appointment - End
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

import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { ToastContainer, toast } from "react-toastify";

const RelatorioConsultaCadastro = () => {
  const { idConsulta } = useParams();
  const [consulta, setConsulta] = useState({});

  //Obter os dados da consulta - Start
  useEffect(() => {
    const getConsulta = async () => {
      try {
        const response = await axios.get(`/api/getAppointment?appointment_id=${idConsulta}`);
        if (response.status === 200) {
          setConsulta(response.data);
        }
      } 
      catch (error) {
        console.error("Erro ao obter consulta:", error);
      }
    };

    getConsulta();
  }, [idConsulta]);
  console.log(consulta)
  //Obter os dados da consulta - End

  //Atualizar os dados da consulta = Start
  const HandleUpdateAppointmentData = async () => {
    try {
      const response = await axios.put('/api/updateAppointmentData', {
        consulta_id: idConsulta,
        dados: consulta.data
      });
      if (response.data === 1) {
        toast.success("O relatório da consulta foi salvo com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      console.log(response.data);
    } catch (error) {
      toast.error("O relatório da consulta não foi salvo por um erro no sistema.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error('Erro ao atualizar dados da consulta:', error);
    }
  };
  //Atualizar os dados da consulta = End

  return (
    <ContainerPrincipalPagina fluid id="container_principal">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
              <FormControlPagsGerais disabled value={consulta.patientName} />
            </BoxGroupInput>
          </Col>
          <Col md={3}>
            <BoxGroupInput>
              <TituloInput>Data da Consulta</TituloInput>
              <FormControlPagsGerais
                disabled
                style={{ textAlign: "center" }}
                value={consulta.date}
              />
            </BoxGroupInput>
          </Col>
        </Row>

        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col md={12}>
            <BoxGroupInput>
              <TituloInput>Relatorio da Consulta</TituloInput>
              <FormControlPagsGerais 
              as="textarea" 
              className="textarea_form" 
              value={consulta.data}
              onChange={(e) => setConsulta({ ...consulta, data: e.target.value })} />
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
            <ButtonSalvar onClick={HandleUpdateAppointmentData}>Salvar</ButtonSalvar>
            </DivButtonSalvar>
          </Col>
        </Row>
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default RelatorioConsultaCadastro;

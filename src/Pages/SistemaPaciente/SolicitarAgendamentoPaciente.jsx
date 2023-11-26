import React, { useEffect, useState } from "react";
import MenuTopo from "../../Components/MenuTopo/MenuTopo";
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
import {
  ContainerGeral,
  TituloDaPagina,
  RowDoFormulario,
  LabelForm,
  ButtonEnviarFormulario,
  TituloSecao,
  BoxInformacoesDoSuporte,
} from "../../Components/ConteudoPagina/ConteudoPaginaComponents";
import { Col, Row } from "react-bootstrap";
import { FormatData } from "../../Utils/FormatacaoDeDados/FormatData";

const SolicitarAgendamentoPaciente = () => {
  const [valuesSolicitacao, setValuesSolicitacao] = useState({
    dataDesejada: "",
    consultaDeRetorno: "",
    paraQuem: 1,
    nomeDoTerceiro: "",
  });

  const [teclaPressionada, setTeclaPressionada] = useState("");

  useEffect(() => {
    console.log(valuesSolicitacao.paraQuem);
  }, [valuesSolicitacao]);

  return (
    <>
      <MenuTopo />
      <MenuLateral />

      <ContainerGeral>
        <Row>
          <Col md={12}>
            <TituloDaPagina>Solicitar Agendamento</TituloDaPagina>
          </Col>
        </Row>

        <RowDoFormulario style={{ borderRadius: "10px 10px 0px 0px" }}>
          <Col>
            <LabelForm>
              <span>Data desejada</span>
              <input
                value={valuesSolicitacao.dataDesejada}
                onKeyDown={(e) => setTeclaPressionada(e.key)}
                onChange={(e) => {
                  if (teclaPressionada !== "Backspace") {
                    const valorFormatado = FormatData(e.target.value);
                    e.target.value = valorFormatado;
                  }

                  setValuesSolicitacao((prevValues) => ({
                    ...prevValues,
                    dataDesejada: e.target.value,
                  }));
                }}
              />
            </LabelForm>
          </Col>
          <Col>
            <LabelForm>
              <span>É uma consulta de retorno?</span>
              <select>
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </select>
            </LabelForm>
          </Col>
          <Col>
            <LabelForm>
              <span>Para quem é esse consulta?</span>
              <select
                value={valuesSolicitacao.paraQuem}
                onChange={(e) => {
                  setValuesSolicitacao((prevValues) => ({
                    ...prevValues,
                    paraQuem: parseInt(e.target.value),
                  }));
                }}
              >
                <option value={1}>Para mim mesmo</option>
                <option value={2}>Para outra pessoa</option>
              </select>
            </LabelForm>
          </Col>
          <Col>
            <LabelForm>
              <span>Nome do Paciente</span>
              <input
                disabled={valuesSolicitacao.paraQuem === 1}
                title="Apenas se a consulta não for para você"
                placeholder={
                  valuesSolicitacao.paraQuem === 1
                    ? "Apenas se não for você"
                    : "Nome do paciente"
                }
              />
            </LabelForm>
          </Col>
        </RowDoFormulario>

        <RowDoFormulario style={{ marginTop: "5px", borderRadius: "0px" }}>
          <Col>
            <LabelForm>
              <span>Motivo da Consulta</span>
              <textarea />
            </LabelForm>
          </Col>
        </RowDoFormulario>

        <RowDoFormulario
          style={{ marginTop: "5px", borderRadius: "0px 0px 10px 10px" }}
        >
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <ButtonEnviarFormulario>
              Solicitar Agendamento
            </ButtonEnviarFormulario>
          </Col>
        </RowDoFormulario>

        <RowDoFormulario
          style={{ marginTop: "20px", borderRadius: "10px 10px 0px 0px" }}
        >
          <Col>
            <TituloSecao>Informaçoes do Suporte</TituloSecao>
          </Col>
        </RowDoFormulario>

        <RowDoFormulario
          style={{
            marginTop: "5px",
            borderRadius: "0px 0px 10px 10px",
            marginBottom: "20px",
          }}
        >
          <Col>
            <BoxInformacoesDoSuporte>
              <h5>Como serei notificado sobre o agendamento?</h5>
              <p>
                Você será notificado pelo seu e-mail, o mesmo que você usa para
                acessar o nosso site. Caso você não tenha o costume de acessar o
                e-mail com frequência, não se preocupe, tambem ligaremos para
                você e faremos a confirmação do horário.
                <br /> Lembre-se, tentaremos entrar em contato pelo número que
                foi registrado no momento do seu cadastro no nosso sistema, Caso
                você não tenha mais acesso a este número, entre em contato com
                nosso suporte para atualizarmos seus dados.
              </p>
            </BoxInformacoesDoSuporte>
          </Col>
        </RowDoFormulario>
      </ContainerGeral>
    </>
  );
};

export default SolicitarAgendamentoPaciente;

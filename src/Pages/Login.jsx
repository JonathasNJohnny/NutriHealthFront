import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  TituloNutri,
  TituloHealth,
  Subtitulo,
  ColQuadroLogin,
  FormControlPagLogin,
  AvisoEsqueceuSenha,
  ButtonConfirmaLogin,
  DivButtonLogin,
} from "../StyledComponents/PagLoginStyledComps";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const autenticacaoDeDados = () => {
    navigate("/menu/administrador");
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="col-auto" style={{ marginTop: "10px" }}>
          <TituloNutri>Nutri &</TituloNutri>
          <TituloHealth>Health</TituloHealth>
          <Subtitulo>Nutrição e Saúde Lado a Lado</Subtitulo>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: "40px" }}>
        <ColQuadroLogin md={5}>
          <FormControlPagLogin placeholder="Login" />
          <FormControlPagLogin
            type="password"
            style={{ marginTop: "15px" }}
            placeholder="Senha"
          />
          <DivButtonLogin>
            <ButtonConfirmaLogin
              onClick={() => {
                autenticacaoDeDados();
              }}
            >
              Confirmar
            </ButtonConfirmaLogin>
          </DivButtonLogin>

          <AvisoEsqueceuSenha>
            Esqueceu sua senha?
            <span style={{ cursor: "pointer" }}> Clique Aqui</span>
          </AvisoEsqueceuSenha>
        </ColQuadroLogin>
      </Row>
    </Container>
  );
};

export default Login;

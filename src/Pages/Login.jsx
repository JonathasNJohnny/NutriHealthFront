import React from "react";
import { Row, Col } from "react-bootstrap";
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

const Login = () => {
  return (
    <>
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
            <ButtonConfirmaLogin>Confirmar</ButtonConfirmaLogin>
          </DivButtonLogin>

          <AvisoEsqueceuSenha>
            Esqueceu sua senha?
            <span style={{ cursor: "pointer" }}> Clique Aqui</span>
          </AvisoEsqueceuSenha>
        </ColQuadroLogin>
      </Row>
    </>
  );
};

export default Login;

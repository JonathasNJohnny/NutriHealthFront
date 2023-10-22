import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from 'axios'; // Importe a biblioteca axios.
import {
  TituloNutri,
  TituloHealth,
  Subtitulo,
  ColQuadroLogin,
  FormControlPagLogin,
  AvisoEsqueceuSenha,
  ButtonConfirmaLogin,
  DivButtonLogin,
  MessageLoginProblem,
} from "../StyledComponents/PagLoginStyledComps";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('/api/login', {
        params: {
          name: username,
          password: password
        }
      });

      const data = response.data;
      setMessage(data.message);
    } catch (error) {
    }
  };

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
          <FormControlPagLogin
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormControlPagLogin
            type="password"
            style={{ marginTop: "15px" }}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <DivButtonLogin>
            <ButtonConfirmaLogin onClick={handleLogin}>Confirmar</ButtonConfirmaLogin>
          </DivButtonLogin>

          <AvisoEsqueceuSenha>
            Esqueceu sua senha?
            <span style={{ cursor: "pointer" }}> Clique Aqui</span>
          </AvisoEsqueceuSenha>

          <MessageLoginProblem>
            {message && <div>{message}</div>}
          </MessageLoginProblem>
        </ColQuadroLogin>
      </Row>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios"; // Importe a biblioteca axios.
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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    //ESSE É O OBJETO E O METODO QUE CHAMA O TOAST
    toast.warning("Toast de Teste", {
      position: toast.POSITION.TOP_RIGHT,
    });
    //--------------------------------------------
    try {
      const response = await axios.get("/api/login", {
        params: {
          name: username,
          password: password,
        },
      });

      const data = JSON.parse(response.data.message);
      if (data !== null) {
        setMessage("Seja bem vindo ao perfil de " + data.user_type);
        if (data.user_type === "Administrador") {
          navigate("/administrador/menu");
        }
      } else {
        setMessage("Nome de usuário ou senha estão incorretos");
      }
    } catch (error) {}
  };

  return (
    <Container fluid>
      {/* Basta Colocar o toast container em QUALQUER lugar do componente para que o toast funcione */}
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
      {/* //------------------------------------------------------ */}
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
            <ButtonConfirmaLogin
              onClick={() => {
                handleLogin();
              }}
            >
              Confirmar
            </ButtonConfirmaLogin>
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
    </Container>
  );
};

export default Login;

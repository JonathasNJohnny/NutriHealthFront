import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
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
  DivQuadroLogin,
  ColQuadroBemVindo,
  DivQuadroBemVindo,
  ButtonSignUp,
} from "../StyledComponents/PagLoginStyledComps";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Icon } from "@iconify/react";

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
    <Container id="container_login" fluid>
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
      <Row>
        <ColQuadroBemVindo md={6}>
          <DivQuadroBemVindo>
            <h1>Bem Vindo!</h1>
            <p>
              Para acessar seu perfil informe seus dados nos campos de login.
              <br />
              Caso ainda não tenha uma conta no site, e deseje criá-la
              <br />
              solicite a criaçao de uma conta clicando no botão abaixo.
            </p>
            <DivButtonLogin>
              <ButtonSignUp>Cadastre-se</ButtonSignUp>
            </DivButtonLogin>
          </DivQuadroBemVindo>
        </ColQuadroBemVindo>
        <ColQuadroLogin md={6}>
          <DivQuadroLogin>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <TituloNutri>Nutri &</TituloNutri>
                <TituloHealth>Health</TituloHealth>
              </div>
              <Icon width={115} icon="vaadin:pyramid-chart" color="#6f3f2d" />
            </div>

            <Subtitulo>Nutrição e Saúde Lado a Lado</Subtitulo>

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
          </DivQuadroLogin>
        </ColQuadroLogin>
      </Row>
    </Container>
  );
};

export default Login;

import { Col, FormControl } from "react-bootstrap";
import styled from "styled-components";
import BackGroundLogin from "../../src/images/backgroundLogin.jpg";

export const TituloNutri = styled.h1`
  text-transform: uppercase;
  color: #6f3f2d;
  font-size: 3.5em;
  text-align: center;
`;

export const TituloHealth = styled.h1`
  text-transform: uppercase;
  margin-top: -15px;
  color: #6f3f2d;
  font-size: 3.5em;
  text-align: center;
`;

export const Subtitulo = styled.h4`
  color: #6f3f2d;
  text-align: center;
`;

export const ColQuadroLogin = styled(Col)`
  display: flex;
  padding-top: 40px;
  justify-content: center;
  padding-bottom: 40px;
  /* background-size: cover;
  background-image: url(${BackGroundLogin});
  background-position: -400px; */
`;

export const DivQuadroLogin = styled.div`
  background-color: rgba(221, 160, 138, 0.5); // Cor de fundo com transparência
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 50px;
`;

export const ColQuadroBemVindo = styled(Col)`
  background-color: rgba(111, 63, 45, 0.5); /* Cor com opacidade de 0.5 */
  backdrop-filter: blur(10px); /* Efeito de desfoque com raio de 10 pixels */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivQuadroBemVindo = styled.div`
  color: #ffff;
  width: 600px;

  p,
  h1 {
    margin: 0;
    text-align: center;
  }

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 18px;
  }
`;

export const FormControlPagLogin = styled(FormControl)`
  &:focus {
    outline: none;
    background-color: #f9d0c1;
    box-shadow: none;
    color: #6f3f2d;
  }

  &::placeholder {
    color: #6f3f2d;
  }
  font-weight: 500;
  color: #6f3f2d;
  font-size: 1.5em;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: #f9d0c1;
`;

export const AvisoEsqueceuSenha = styled.h4`
  color: #6f3f2d;
  margin: 15px 0px 0px 0px;
  display: flex;
  justify-content: center;

  span {
    margin-left: 5px;
    color: #5e17db;
  }
`;

export const DivButtonLogin = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonConfirmaLogin = styled.button`
  border: none;
  background-color: #6f3f2d;
  border-radius: 20px;
  padding: 10px;
  transition: 0.4s;
  color: #ffff;
  font-weight: 600;

  &:hover {
    background-color: #8b3516;
    color: white;
  }
`;

export const ButtonSignUp = styled.button`
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  transition: 0.4s;
  color: #ffff;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #f8aa8e;
  }
`;

export const MessageLoginProblem = styled.h4`
  color: #822e1e;
  margin: 15px 0px 0px 0px;
  text-align: right;
  display: flex;
  justify-content: right;
  span {
    margin-left: 5px;
    color: #5e17db;
  }
`;

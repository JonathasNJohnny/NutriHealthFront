import { Col, FormControl } from "react-bootstrap";
import styled from "styled-components";

export const TituloNutri = styled.h1`
  text-transform: uppercase;
  color: #6f3f2d;
  font-size: 3.5em;
  padding-left: 57px;
`;

export const TituloHealth = styled.h1`
  text-transform: uppercase;
  margin-top: -15px;
  color: #6f3f2d;
  font-size: 3.5em;
`;

export const Subtitulo = styled.h4`
  color: #6f3f2d;
`;

export const ColQuadroLogin = styled(Col)`
  background-color: #dda08a;
  border-radius: 20px;
  padding: 50px;
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
  background-color: #f9d0c1;
  border-radius: 20px;
  padding: 10px;
  transition: 0.4s;
  color: #6f3f2d;
  font-weight: 600;

  &:hover {
    background-color: #6f3f2d;
    color: white;
  }
`;

export const MessageLoginProblem = styled.h4`
  color: #822E1E;
  margin: 15px 0px 0px 0px;
  text-align: right;
  display: flex;
  justify-content: right;
  span {
    margin-left: 5px;
    color: #5e17db;
  }
`;

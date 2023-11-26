import { Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerGeral = styled.div`
  margin-left: 275px;
  margin-right: 20px;
  margin-top: 81px;
`;

export const TituloDaPagina = styled.h4`
  margin: 0px;
  margin-bottom: 15px;
  padding: 0px;
  text-transform: uppercase;
  color: #6f3f2d;
`;

export const RowDoFormulario = styled(Row)`
  background-color: #ffff;
  padding: 17px 10px;
  margin: 0px;
  border-radius: 10px;
`;

export const LabelForm = styled.label`
  width: 100%;
  span {
    color: #6f3f2d;
    font-size: 1.1em;
    margin-bottom: 10px;
    display: block;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  }

  select {
    width: 100%;
    height: 25px;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
  }

  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }
`;

export const ButtonEnviarFormulario = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #2eda0c;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #10be00;
  }
`;

export const TituloSecao = styled.h5`
  margin: 0px;
  text-transform: uppercase;
  color: #6f3f2d;
`;

export const BoxInformacoesDoSuporte = styled.div`
  background-color: #ff966f;
  border-radius: 10px;
  padding: 10px;

  h5 {
    color: #fff;
    margin: 0px;
    border-bottom: 1px solid #fff;
  }

  p {
    margin: 10px 0px;
    color: #fff;
  }
`;

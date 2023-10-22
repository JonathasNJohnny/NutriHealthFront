import { Icon } from "@iconify/react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerPrincipalPagina = styled(Container)`
  padding: 20px 40px 20px 40px;
`;

export const BoxInfosHeaderPrincipal = styled.div`
  background-color: #e4ab97;
  border-radius: 20px;
  padding: 15px 20px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColHeaderPrincipal = styled(Col)`
  display: flex;
  justify-content: space-between;
`;

export const TituloTipoDeUsuarioHeader = styled.h4`
  margin: 0px;
  font-size: 1.5em;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 15px;
`;

export const BoxIconHeader = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const RowMenusIniciais = styled(Row)`
  background-color: #e4ab97;
  align-items: center;
  margin-right: 2px;
  margin-left: 2px;
  margin-top: 25px;
  border-radius: 20px;
  padding: 50px;
  height: 500px;
`;

export const RowConteudoPagina = styled(Row)`
  background-color: #e4ab97;
  margin-right: 2px;
  margin-left: 2px;
  margin-top: 25px;
  border-radius: 20px;
  height: 421px;
  padding: 20px 10px;
`;

export const DivOpcaoMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxOpcaoMenu = styled.div`
  background-color: #6f3f2d;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  max-width: 120px;
  transition: 0.5s;

  &:hover {
    background-color: white;
  }

  &:hover .icon-menu {
    color: #6f3f2d;
  }
`;

export const IconStyled = styled(Icon)`
  color: white;
  transition: 0.5s;
`;

export const TitulosMenus = styled.h4`
  color: #6f3f2d;
  font-size: 1.6em;
`;

export const DivTituloMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const BoxGroupInput = styled.div`
  margin-bottom: 30px;
`;

export const FormControlPagsGerais = styled(FormControl)`
  border: none;
  border-radius: 20px;
  height: 40px;
  color: #6f3f2d;
  font-size: 1.2em;
  &:focus {
    box-shadow: none;
    border: none;
    color: #6f3f2d;
  }
`;

export const TituloInput = styled.h5`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 15px;
`;

export const DivButtonSalvar = styled.div`
  display: flex;
  justify-content: end;
  height: 174px;
  align-items: end;
`;

export const ButtonSalvar = styled.button`
  border: none;
  background-color: #6f3f2d;
  border-radius: 20px;
  height: 40px;
  padding: 6px 50px;
  transition: 0.4s;
  color: white;
  font-weight: 600;
  font-size: 1.2em;

  &:hover {
    background-color: #f9d0c1;
    color: #6f3f2d;
  }
`;

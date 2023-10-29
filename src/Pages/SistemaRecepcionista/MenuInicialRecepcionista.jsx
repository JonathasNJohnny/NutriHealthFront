import React from "react";
import { Col } from "react-bootstrap";
import {
  BoxOpcaoMenu,
  ContainerPrincipalPagina,
  DivOpcaoMenu,
  DivTituloMenu,
  TitulosMenus,
  IconStyled,
  RowMenusIniciais,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { NavLink } from "react-router-dom";

const MenuInicialRecepcionista = () => {
  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Recepcionista"}
        PaginaDoSistema={"Menu"}
      />

      <RowMenusIniciais className="justify-content-center">
        <Col className="col-auto">
          <DivOpcaoMenu>
            <NavLink to={"/recepcionista/lista-pacientes"}>
              <BoxOpcaoMenu>
                <IconStyled
                  className="icon-menu"
                  icon="ri:user-fill"
                  height={100}
                />
              </BoxOpcaoMenu>
            </NavLink>
          </DivOpcaoMenu>

          <DivTituloMenu>
            <TitulosMenus>Gerenciamento de Pacientes</TitulosMenus>
          </DivTituloMenu>
        </Col>

        <Col className="col-auto">
          <DivOpcaoMenu>
            <NavLink to={"/recepcionista/agendar-consulta"}>
              <BoxOpcaoMenu>
                <IconStyled
                  className="icon-menu"
                  icon="fluent-emoji-high-contrast:spiral-calendar"
                  height={100}
                />
              </BoxOpcaoMenu>
            </NavLink>
          </DivOpcaoMenu>

          <DivTituloMenu>
            <TitulosMenus>Gerenciamento de Consultas</TitulosMenus>
          </DivTituloMenu>
        </Col>
      </RowMenusIniciais>
    </ContainerPrincipalPagina>
  );
};

export default MenuInicialRecepcionista;

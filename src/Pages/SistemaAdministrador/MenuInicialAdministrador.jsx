import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  BoxOpcaoMenu,
  ContainerPrincipalPagina,
  DivOpcaoMenu,
  DivTituloMenu,
  RowConteudoPagina,
  TitulosMenus,
  IconStyled,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const MenuInicialAdministrador = () => {
  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Administrador"}
        PaginaDoSistema={"Menu"}
      />

      <RowConteudoPagina className="justify-content-center">
        <Col className="col-auto">
          <DivOpcaoMenu>
            <NavLink to={"/"}>
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
            <TitulosMenus>Gerenciamento de Usuários</TitulosMenus>
          </DivTituloMenu>
        </Col>
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default MenuInicialAdministrador;

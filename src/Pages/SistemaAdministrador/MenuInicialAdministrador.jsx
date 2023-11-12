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

const MenuInicialAdministrador = () => {
  return (
    <ContainerPrincipalPagina fluid id="container_principal">
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Administrador"}
        PaginaDoSistema={"Menu"}
      />

      <RowMenusIniciais className="justify-content-center">
        <Col className="col-auto">
          <DivOpcaoMenu>
            <NavLink to={"/administrador/lista-usuarios"}>
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
      </RowMenusIniciais>
    </ContainerPrincipalPagina>
  );
};

export default MenuInicialAdministrador;

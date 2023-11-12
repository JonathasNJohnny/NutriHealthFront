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

const MenuInicialMedico = () => {
  return (
    <ContainerPrincipalPagina fluid id="container_principal">
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Médico"}
        PaginaDoSistema={"Menu"}
      />

      <RowMenusIniciais className="justify-content-center">
        <Col className="col-auto">
          <DivOpcaoMenu>
            <NavLink to={"/medico/gerenciamento-consultas/lista"}>
              <BoxOpcaoMenu>
                <IconStyled
                  className="icon-menu"
                  icon="fluent:notepad-edit-16-regular"
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

export default MenuInicialMedico;

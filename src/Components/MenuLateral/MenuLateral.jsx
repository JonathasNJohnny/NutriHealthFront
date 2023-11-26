import React, { useState } from "react";
import {
  BoxMenu,
  MenuLateralDiv,
  NavLinkMenuLateral,
  DivLinksNavLateral,
  GerenConsultasDrop,
  SubmenuConsultas,
  NavLinkSubmenuLateral,
} from "./MenuLateralComponents";
import { Icon } from "@iconify/react";
import Collapse from "react-bootstrap/Collapse";

const MenuLateral = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <MenuLateralDiv>
      <BoxMenu>Menu</BoxMenu>

      <DivLinksNavLateral>
        <GerenConsultasDrop
          onClick={() => setIsClicked(!isClicked)}
          $ativo={isClicked}
          aria-controls="submenu-consultas"
          aria-expanded={isClicked}
        >
          Consultas{" "}
          <div>
            <Icon
              icon="iconamoon:arrow-up-2-light"
              width={25}
              color={isClicked ? "#ffff" : "#6f3f2d"}
              rotate={2}
            />
          </div>
        </GerenConsultasDrop>
        <Collapse in={isClicked}>
          <SubmenuConsultas id="submenu-consultas">
            <NavLinkSubmenuLateral
              to="/paciente/consultas/consultas-agendadas"
              activeClassName="active"
            >
              • Consultas Agendadas
            </NavLinkSubmenuLateral>
            <NavLinkSubmenuLateral
              to="/paciente/consultas/solicitar-agendamento"
              activeClassName="active"
            >
              • Solicitar Agendamento
            </NavLinkSubmenuLateral>
          </SubmenuConsultas>
        </Collapse>
        <NavLinkMenuLateral>Relatorios de Consultas</NavLinkMenuLateral>
        <NavLinkMenuLateral>Suporte / Contato</NavLinkMenuLateral>
      </DivLinksNavLateral>
    </MenuLateralDiv>
  );
};

export default MenuLateral;

import React from "react";
import {
  BoxInfosHeaderPrincipal,
  ColHeaderPrincipal,
  TituloTipoDeUsuarioHeader,
  BoxIconHeader,
} from "../StyledComponents/StyledStructPages";
import { Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

const HeaderPrincipal = ({ TipoDeUsuarioSistema, PaginaDoSistema }) => {
  return (
    <Row>
      <ColHeaderPrincipal>
        <BoxInfosHeaderPrincipal>
          <TituloTipoDeUsuarioHeader>
            {TipoDeUsuarioSistema} - {PaginaDoSistema}
          </TituloTipoDeUsuarioHeader>
        </BoxInfosHeaderPrincipal>
        <BoxInfosHeaderPrincipal>
          <BoxIconHeader>
            <Icon
              icon="ic:outline-notifications-active"
              width={40}
              color="white"
            />
          </BoxIconHeader>
          <BoxIconHeader>
            <Icon icon="fluent-mdl2:mail" color="white" width={35} />
          </BoxIconHeader>
          <BoxIconHeader style={{ marginRight: "0px" }}>
            <Icon icon="icon-park-outline:power" color="white" width={30} />
          </BoxIconHeader>
        </BoxInfosHeaderPrincipal>
      </ColHeaderPrincipal>
    </Row>
  );
};

export default HeaderPrincipal;

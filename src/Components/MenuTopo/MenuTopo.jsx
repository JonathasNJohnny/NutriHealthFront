import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
// import styles from "./MenuTopoStyles.module.css";
import {
  ContainerMenuTopo,
  IconPyramidMenuTopo,
  RowMenuTopo,
} from "./MenuTopoComponents";
// import { Icon } from "@iconify/react";

const MenuTopo = () => {
  const [nomeUsuario, setNomeUsuario] = useState("Usuário");

  return (
    <ContainerMenuTopo fluid>
      <RowMenuTopo>
        <Col>
          <span
            style={{
              fontSize: "1.7em",
              color: "#6f3f2d",
              textTransform: "uppercase",
            }}
          >
            Nutri&Health
          </span>
          <span style={{ position: "relative" }}>
            <IconPyramidMenuTopo
              width={25}
              icon="vaadin:pyramid-chart"
              color="#6f3f2d"
            />
          </span>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.4em", color: "#6f3f2d" }}>Olá,</span>
          <span style={{ fontSize: "1.4em", color: "#6f3f2d" }}>
            {nomeUsuario}
          </span>
        </Col>
      </RowMenuTopo>
    </ContainerMenuTopo>
  );
};

export default MenuTopo;

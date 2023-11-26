import { Icon } from "@iconify/react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const RowMenuTopo = styled(Row)`
  padding: 10px;
  background-color: #ffff;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
`;

export const IconPyramidMenuTopo = styled(Icon)`
  position: absolute;
  margin-left: 4px;
  top: -12px;
`;

export const ContainerMenuTopo = styled(Container)`
  position: fixed;
  top: 0;
`;

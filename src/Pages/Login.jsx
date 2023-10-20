import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  TituloNutri,
  TituloHealth,
} from "../StyledComponents/PagLoginStyledComps";

const Login = () => {
  return (
    <Row className="justify-content-center">
      <Col className="col-auto">
        <TituloNutri>Nutri &</TituloNutri>
        <TituloHealth>Health</TituloHealth>
      </Col>
    </Row>
  );
};

export default Login;

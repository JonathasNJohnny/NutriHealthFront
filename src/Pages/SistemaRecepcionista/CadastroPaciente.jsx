import React, { useState } from "react";
import {
  ContainerPrincipalPagina,
  FormControlPagsGerais,
  RowConteudoPagina,
  TituloInput,
  BoxGroupInput,
  ButtonSalvar,
  DivButtonSalvar,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CadastroPaciente = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    number: "",
    cpf: "",
    typeUser: "Paciente",
    addressCity: "",
    addressUF: "",
    addressNeighborhood: "",
    addressStreet: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveUser = () => {
    axios
      .post("/api/createUser", userData)
      .then((response) => {
        console.log(response.data);
        if (response.data === 1) {
          toast.success("Usuário cadastrado com sucesso", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data === 2) {
          toast.warning("Usuário já cadastrado no sistema!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(
            "Erro desconhecido, caso não consiga criar um usuário, contate o suporte",
            { position: toast.POSITION.TOP_RIGHT }
          );
        }
      })
      .catch((error) => {
        console.error("Erro ao criar usuário: " + error);
      });
  };

  return (
    <ContainerPrincipalPagina fluid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Recepcionista"}
        PaginaDoSistema={"Cadastro de Paciente"}
      />

      <RowConteudoPagina>
        <Col md={6}>
          <BoxGroupInput>
            <TituloInput>Nome</TituloInput>
            <FormControlPagsGerais
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Número de Celular</TituloInput>
            <FormControlPagsGerais
              name="number"
              value={userData.number}
              onChange={handleInputChange}
            />
          </BoxGroupInput>

          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Cidade</TituloInput>
                <FormControlPagsGerais
                  name="addressCity"
                  value={userData.addressCity}
                  onChange={handleInputChange}
                />
              </BoxGroupInput>
            </Col>

            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Uf</TituloInput>
                <FormControlPagsGerais
                  name="addressUF"
                  value={userData.addressUF}
                  onChange={handleInputChange}
                />
              </BoxGroupInput>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Bairro</TituloInput>
                <FormControlPagsGerais
                  name="addressNeighborhood"
                  value={userData.addressNeighborhood}
                  onChange={handleInputChange}
                />
              </BoxGroupInput>
            </Col>

            <Col md={6}>
              <BoxGroupInput>
                <TituloInput>Rua</TituloInput>
                <FormControlPagsGerais
                  name="addressStreet"
                  value={userData.addressStreet}
                  onChange={handleInputChange}
                />
              </BoxGroupInput>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <BoxGroupInput>
            <TituloInput>CPF</TituloInput>
            <FormControlPagsGerais
              name="cpf"
              value={userData.cpf}
              onChange={handleInputChange}
            />
          </BoxGroupInput>

          <BoxGroupInput>
            <TituloInput>Email</TituloInput>
            <FormControlPagsGerais
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </BoxGroupInput>

          <DivButtonSalvar style={{ height: "174px" }}>
            <ButtonSalvar onClick={handleSaveUser}>Salvar</ButtonSalvar>
          </DivButtonSalvar>
        </Col>

        {/* <Row className="justify-content-end">
          <Col className="col-auto">
            <ButtonSalvar>Salvar</ButtonSalvar>
          </Col>
        </Row> */}
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default CadastroPaciente;

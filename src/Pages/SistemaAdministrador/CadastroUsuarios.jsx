import React, { useState } from "react";
import {
  ContainerPrincipalPagina,
  FormControlPagsGerais,
  RowConteudoPagina,
  TituloInput,
  BoxGroupInput,
  ButtonSalvar,
  DivButtonSalvar,
  FormSelectPagsGerais,
  MessageLoginProblem,
} from "../../StyledComponents/StyledStructPages";
import HeaderPrincipal from "../../Components/HeaderPrincipal";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const CadastroUsuarios = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    number: "",
    cpf: "",
    typeUser: "Medico",
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
        //Aqui o response.data pode retornar 3 valores(1, 2 ou 3), e detalhe, eles vem em String, deixei o console.log pra vc dar uma olhada, os valores podem ser.
        //1: Esse valor indica que o usuário foi criado com sucesso.
        //2: Esse valor indica que já existe um usuário cadastro com esse nome
        //3: Esse valor indica que houve um erro desconhecido
      })
      .catch((error) => {
        console.error("Erro ao criar usuário: " + error);
      });
  };

  return (
    <ContainerPrincipalPagina fluid>
      <HeaderPrincipal
        TipoDeUsuarioSistema={"Administrador"}
        PaginaDoSistema={"Cadastro de Usuários"}
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

          <BoxGroupInput>
            <TituloInput>Tipo de Usuario</TituloInput>
            <FormSelectPagsGerais
              name="typeUser"
              value={userData.typeUser}
              onChange={handleInputChange}
            >
              <option value="Medico">Médico</option>
              <option value="Recepcionista">Recepcionista</option>
            </FormSelectPagsGerais>
          </BoxGroupInput>

          <DivButtonSalvar>
            <ButtonSalvar onClick={handleSaveUser}>Salvar</ButtonSalvar>
          </DivButtonSalvar>
        </Col>
      </RowConteudoPagina>
    </ContainerPrincipalPagina>
  );
};

export default CadastroUsuarios;

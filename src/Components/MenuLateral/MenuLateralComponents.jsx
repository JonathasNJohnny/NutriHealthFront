import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuLateralDiv = styled.div`
  width: 255px;
  background-color: #ffff;
  position: fixed;
  top: 61px;
  bottom: 0px;
  box-shadow: 4px 0px 3px rgba(0, 0, 0, 0.1);
`;

export const BoxMenu = styled.div`
  background-color: #ff966f;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 6px;
  color: #fff;
  font-size: 1.3em;
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

export const NavLinkMenuLateral = styled(NavLink)`
  transition: 0.3s all;
  display: block;
  text-decoration: none;
  font-size: 1.1em;
  color: #6f3f2d;
  padding: 10px;
  border-radius: 0px 20px 20px 0px;
  width: 95%;
  &:hover {
    background-color: #fdebe4;
  }
`;

export const DivLinksNavLateral = styled.div`
  margin-top: 15px;
`;

export const NavLinkSubmenuLateral = styled(NavLink)`
  margin: 5px 0px 0px 5px;
  padding: 2px;
  display: block;
  text-decoration: none;
  color: #6f3f2d;

  &:hover {
    font-weight: 600;
  }

  &.active {
    font-weight: 600;
  }
`;

export const GerenConsultasDrop = styled.button`
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s all;
  text-align: start;
  background-color: ${({ $ativo }) => ($ativo ? "#FF966F" : "transparent")};
  outline: none;
  border: none;
  color: ${({ $ativo }) => ($ativo ? "#ffff" : "#6f3f2d")};
  font-weight: ${({ $ativo }) => ($ativo ? "bold" : "500")};
  padding: 10px;
  border-radius: 0px 20px 20px 0px;
  width: 95%;
  &:hover {
    background-color: ${({ $ativo }) => ($ativo ? null : "#fdebe4")};
  }
`;

export const SubmenuConsultas = styled.div`
  padding-left: 25px;
  color: #6f3f2d;
`;

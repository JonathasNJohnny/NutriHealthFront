import styled from "styled-components";
import { Icon } from "@iconify/react";

export const IconSearchAutoComplete = styled(Icon)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 7px;
  left: 5px;
`;

export const DivAutoComplete = styled.div`
  position: relative;
`;

export const DivResultsAutoComplete = styled.div`
  position: absolute;
  background-color: #f1f1f1f1;
  width: 100%;
  border-radius: 20px;
  max-height: 205px;
  overflow-y: auto;
  z-index: 2;

  /* Definir a largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 5px; /* Substitua pelo valor desejado */
    display: none;
  }

  /* Definir a cor do track (fundo) e thumb (ponteiro) */
  &::-webkit-scrollbar-thumb {
    background-color: #6f3f2d; /* Cor do thumb */
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2; /* Cor do track */
    border-radius: 20px;
  }
`;

export const DivItemResults = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  &:hover {
    background-color: #dadadaed;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

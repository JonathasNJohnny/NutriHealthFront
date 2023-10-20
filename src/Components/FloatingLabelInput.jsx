import React, { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import styled from "styled-components";

const FormGroupStyled = styled(FormGroup)`
  position: relative;
  display: flex;
  justify-content: center;

  label {
    position: absolute;
    top: 15px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    transition: 0.2s;
    pointer-events: none;
  }

  &.active label {
    top: -12px;
  }
`;

const FormControlStyled = styled(FormControl)`
  &:focus {
    outline: none;
    background-color: #6f3f2d;
    box-shadow: none;
  }
  font-size: 1.5em;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: #6f3f2d;
`;

const FloatingLabelInput = ({ label, value }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    console.log(typeof value);
  };

  return (
    <FormGroupStyled className={focused ? "active" : ""}>
      <FormControlStyled
        onFocus={() => {
          handleFocus();
        }}
        onBlur={() => {
          handleBlur();
        }}
      />
      <label>{label}</label>
    </FormGroupStyled>
  );
};

export default FloatingLabelInput;

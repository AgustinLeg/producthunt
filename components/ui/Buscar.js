import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const ButtonSubmit = styled.div`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  text-indent: -9999px;
`;

const Buscar = () => {
  return (
    <form
      css={css`
        position: relative;
        margin-left: 1rem;
      `}
    >
      <InputText type="text" placeholder="Buscar Productos"/>
      <ButtonSubmit type="submit">Buscar</ButtonSubmit>
    </form>
  );
};

export default Buscar;

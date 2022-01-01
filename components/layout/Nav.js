import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const Navegacion = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: var(--fontSecondary);
    
    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
        border-bottom: 1px solid var(--gris2);
    }
    
  }
`;

const Nav = () => {
  return (
    <Navegacion>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/populares">
        <a>Populares</a>
      </Link>
      <Link href="/nuevo-producto">
        <a>Nuevo Producto</a>
      </Link>
    </Navegacion>
  );
};

export default Nav;

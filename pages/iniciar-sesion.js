import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";
import { useAuthContext } from "../context/AuthContext";

const IniciarSesion = () => {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  const { login } = useAuthContext();
  const {
    values,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(INITIAL_STATE, validarIniciarSesion, test);

  const { email, password } = values;

  function test() {
    console.log('clicked')
    login(email, password);
  }

  return (
    <Layout>
      <>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          Iniciar Sesion
        </h1>
        <Formulario onSubmit={handleSubmit} noValidate>
          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.email && <Error>{errores.email}</Error>}

          <Campo>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.password && <Error>{errores.password}</Error>}
          <InputSubmit type="submit" value="Iniciar Sesion" />
        </Formulario>
      </>
    </Layout>
  );
}

export default IniciarSesion
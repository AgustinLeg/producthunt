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
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import { useAuthContext } from "../context/AuthContext";

export default function CrearCuenta() {
  const INITIAL_STATE = {
    nombre: "",
    email: "",
    password: "",
  };

  const { createUser } = useAuthContext();
  const {
    values,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(INITIAL_STATE, validarCrearCuenta, crearUsuario);

  const { nombre, email, password } = values;

  function crearUsuario() {
    createUser(email, password, nombre);
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
          Crear Cuenta
        </h1>
        <Formulario onSubmit={handleSubmit} noValidate>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.nombre && <Error>{errores.nombre}</Error>}
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
          <InputSubmit type="submit" value="Crear Cuenta" />
        </Formulario>
      </>
    </Layout>
  );
}

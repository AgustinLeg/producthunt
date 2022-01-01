import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
            --fontPrimary: "Roboto Slab", serif;
            --fontSecondary: 'PT Sans', serif;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          &:before,
          &:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: var(--fontSecondary);
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: var(--fontPrimary);
            font-weight: 700;
          }
          h3 {
            font-family: var(--fontSecondary);
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Head>
        <title>Product Hunt Firebase y Next.js</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import "./basic.css";

const theme = {
  serif: "Georgia, serif",
  sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  colorSecondary: "#333",
  colorLink: "#635ac7"
};
const CSSVariables = styled.div`
  --font-serif: ${props => props.theme.serif};
  --font-sans: ${props => props.theme.sansSerif};
  --color-secondary: ${props => props.theme.colorSecondary};
  --color-link: ${props => props.theme.colorLink};

  font-family: var(--font-sans);
  font-weight: normal;
  line-height: 1.5;

  a {
    color: var(--color-link);
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Layout = ({ children }) => (
  <>
    <Helmet title="Asana — Pet Adoption Agency" />
    <CSSVariables theme={theme}>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </CSSVariables>
  </>
);

export default Layout;

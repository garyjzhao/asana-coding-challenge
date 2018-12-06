import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./basic.css";
import favicon from "../images/favicon.png";

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

const Layout = ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{ lang: "en", amp: "" }}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    >
      <title>Asana — Pet Adoption Agency</title>
      <meta
        name="description"
        content="Adopt your new puppy today with Asana's new pet adoption."
      />
    </Helmet>
    <CSSVariables theme={theme}>
      <Header />
      {children}
      <Footer />
    </CSSVariables>
  </>
);

export default Layout;

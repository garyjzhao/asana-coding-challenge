import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 1023px) {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  font-family: var(--font-sans);
  font-weight: normal;
  line-height: 1.5;
`;

const CSSVariables = styled.div`
  --font-serif: ${props => props.theme.serif};
  --font-sans: ${props => props.theme.sansSerif};
  --color-secondary: ${props => props.theme.colorSecondary};
  --color-link: ${props => props.theme.colorLink};
`;
const theme = {
  serif: "Georgia, serif",
  sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  colorSecondary: "#333",
  colorLink: "#635ac7"
};
class Index extends React.Component {
  render() {
    return (
      <CSSVariables theme={theme}>
        <Wrapper>
          <Header />
          <Body />
          <Footer />
        </Wrapper>
      </CSSVariables>
    );
  }
}

export default Index;

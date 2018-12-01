import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import styled from "styled-components";
import { graphql } from "gatsby";

const Wrapper = styled.div`
  @media screen and (max-width: 1023px) {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  font-family: var(--font-sans);
  font-weight: normal;
  line-height: 1.5;

  a {
    color: var(--color-link);
  }
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
          {/* {this.props.data.allFile.edges.map(test => (
            <p>{test.node.absolutePath}</p>
          ))} */}
          <Footer />
        </Wrapper>
      </CSSVariables>
    );
  }
}

export const query = graphql`
  query {
    allFile(filter: { ext: { eq: ".jpeg" } }) {
      edges {
        node {
          id
          relativePath
          absolutePath
          name
        }
      }
    }
  }
`;

export default Index;

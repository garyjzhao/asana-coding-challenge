import React from "react";
import DogPicker from "../components/DogPicker";
import Layout from "../components/layout";
import styled from "styled-components";

const HeaderQuote = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  h1 {
    font-size: calc(33.75px + 11.25 * ((100vw - 480px) / 800));
    font-weight: normal;
  }
  .header-quote {
    color: var(--color-secondary);
    font-family: var(--font-sans-serif);
    max-width: 460px;
    margin: 0 auto;
    font-size: 16px;
    text-align: left;
    @media screen and (min-width: 768px) {
      font-size: 22px;
    }
  }
`;

const GridWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: -ms-grid;
  -ms-grid-columns: 250px;
  -ms-grid-rows: 250px;
  display: grid;
  grid-template: 250px / 250px;
  grid-gap: 15px;
  justify-content: center;
  @media screen and (min-width: 516px) {
    -ms-grid-columns: 250px 15px 250px;
    grid-template-columns: 250px 250px;
  }
  @media screen and (min-width: 768px) {
    -ms-grid-columns: 250px 15px 250px 15px 250px;
    grid-template-columns: 250px 250px 250px;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <HeaderQuote role="banner">
      <h1>Adopt a puppy today with Asana!</h1>

      <blockquote className="header-quote">
        <p>
          A dog will teach you unconditional love. If you can have that in your
          life, things won't be too&nbsp;bad.
        </p>

        <cite>&mdash;Robert Wagner</cite>
      </blockquote>
    </HeaderQuote>
    <GridWrapper>
      {data.allFile.edges.map(data => (
        <DogPicker
          key={data.node.childImageSharp.id}
          aspectRatio={data.node.childImageSharp.fluid.aspectRatio}
          lightboxImage={data.node.childImageSharp.fluid.src}
          original={data.node.childImageSharp.original.src}
          thumbnail={data.node.childImageSharp.resize.src}
        />
      ))}
    </GridWrapper>
  </Layout>
);

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "images/raw" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            id
            fluid {
              src
              aspectRatio
            }
            original {
              src
            }
            resize(width: 250, height: 250, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

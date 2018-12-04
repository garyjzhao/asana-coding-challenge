import React from "react";
import DogPicker from "../components/DogPicker";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allFile.edges.map(data => (
      <DogPicker
        key={data.node.childImageSharp.id}
        aspectRatio={data.node.childImageSharp.fluid.aspectRatio}
        fullImage={data.node.childImageSharp.fluid.src}
        sizes={data.node.childImageSharp.sizes}
      />
    ))}
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
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

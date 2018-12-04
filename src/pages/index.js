import React from "react";
import DogPicker from "../components/DogPicker";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allFile.edges.map(data => (
      <DogPicker
        key={data.node.childImageSharp.id}
        aspectRatio={data.node.childImageSharp.fluid.aspectRatio}
        lightboxImage={data.node.childImageSharp.fluid.src}
        original={data.node.childImageSharp.original.src}
        thumbnail={data.node.childImageSharp.resize.src}
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

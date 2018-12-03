import React from "react";
import DogPicker from "../components/DogPicker";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allFile.edges.map(data => (
      <DogPicker
        key={data.node.childImageSharp.id}
        thumbnail={data.node.childImageSharp.resize.src}
        fullImage={data.node.childImageSharp.fluid.src}
      />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpeg" } }) {
      edges {
        node {
          childImageSharp {
            id
            resize(width: 250, height: 250, cropFocus: CENTER) {
              src
            }
            fluid(maxWidth: 800) {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

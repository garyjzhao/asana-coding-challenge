import React from "react";
import DogPicker from "../components/DogPicker";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allFile.edges.map(data => (
      <DogPicker
        thumbnail={data.node.childImageSharp.resize.src}
        // fullImage={data.node.childImageSharp.orignial.src}
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
            resize(width: 250, height: 250, cropFocus: CENTER) {
              src
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

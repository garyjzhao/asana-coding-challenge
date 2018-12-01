import React from "react";
import DogPicker from "../components/DogPicker";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    {data.allDataJson.edges[0].node.dogs.map(data => (
      <DogPicker image={data.image} />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          dogs {
            image
          }
        }
      }
    }
  }
`;

export default IndexPage;

import React from "react";
import styled from "styled-components";
import DogPicker from "./DogPicker";

const BodyWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

class Body extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <DogPicker />
        <DogPicker />
        <DogPicker />
      </BodyWrapper>
    );
  }
}

export default Body;

import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 16px;
  img {
    width: 100%;
  }
`;

class DogPicker extends React.Component {
  render() {
    return (
      <Box>
        <img src={this.props.image} alt="test" />
      </Box>
    );
  }
}

export default DogPicker;

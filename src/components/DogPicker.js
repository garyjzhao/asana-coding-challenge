import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-content: center;
`;

class DogPicker extends React.Component {
  render() {
    return (
      <Box>
        <p>words</p>
      </Box>
    );
  }
}

export default DogPicker;

import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseButton = styled.div`
  color: #fff;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
`;

class Lightbox extends React.Component {
  render() {
    return (
      <Overlay onClick={this.props.toggleLightbox}>
        <CloseButton>&times;</CloseButton>
        <img src={this.props.fullImage} alt="Dog" />
      </Overlay>
    );
  }
}

export default Lightbox;

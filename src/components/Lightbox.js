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
  z-index: 1000;
  .image-wrapper {
    padding: 0 15px;
    @media screen and (max-width: 767px) {
      max-width: 400px;
      max-height: 500px;
    }
    img {
      height: auto;
      width: 100%;
      ${props =>
        props.aspectRatio < 1 ? "max-height: 400px; width: auto;" : ""}
      @media screen and (min-width: 768px) {
        width: auto;
        max-height: 500px;
      }
    }
  }
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
      <Overlay
        onClick={this.props.toggleLightbox}
        aspectRatio={this.props.aspectRatio}
      >
        <CloseButton>&times;</CloseButton>
        <div class="image-wrapper">
          <img src={this.props.fullImage} alt="Dog" />
        </div>
      </Overlay>
    );
  }
}

export default Lightbox;

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  .image-wrapper {
    padding: 0 15px;
    ${props =>
      props.aspectRatio < 1
        ? "display: flex;justify-content: center;flex-basis: 100%;"
        : ""}
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      flex-basis: 100%;
    }
    img {
      height: auto;
      ${props =>
        props.aspectRatio < 1
          ? "max-height: 400px; width: auto;"
          : "max-width: 600px; width: 100%;"}
      @media screen and (min-width: 768px) {
        width: auto;
        max-height: 400px;
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

const DownloadButton = styled.a`
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  letter-spacing: 0.5px;
  line-height: 36px;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.15s, color 0.15s ease-in-out;
  white-space: nowrap;
`;

class Lightbox extends React.Component {
  render() {
    return (
      <Overlay
        onClick={this.props.toggleLightbox}
        aspectRatio={this.props.aspectRatio}
      >
        <CloseButton>&times;</CloseButton>
        <div className="image-wrapper">
          <img src={this.props.lightboxImage} alt="Dog" />
        </div>
        <DownloadButton href={this.props.original} target="_blank">
          Click to download full sized image
        </DownloadButton>
      </Overlay>
    );
  }
}

export default Lightbox;

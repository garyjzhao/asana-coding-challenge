import React from "react";
import styled from "styled-components";
import Lightbox from "./Lightbox";

const ImageLink = styled.a`
  width: 250px;
  height: 250px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 16px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  img {
    transition: all 1s ease;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .image-overlay {
      opacity: 1;
    }
  }
  .image-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.25);
    &--icon {
      color: white;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

class DogPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  toggleLightbox() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
        <ImageLink onClick={this.toggleLightbox}>
          <img src={this.props.thumbnail} alt="Thumnbnail of Dog Pictures" />
          <div class="image-overlay">
            <div className="image-overlay--icon">+</div>
          </div>
        </ImageLink>

        {this.state.isOpen && (
          <Lightbox
            toggleLightbox={this.toggleLightbox}
            lightboxImage={this.props.lightboxImage}
            original={this.props.original}
            aspectRatio={this.props.aspectRatio}
          />
        )}
      </>
    );
  }
}

export default DogPicker;

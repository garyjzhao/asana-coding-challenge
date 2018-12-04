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

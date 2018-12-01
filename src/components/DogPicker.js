import React from "react";
import styled from "styled-components";

const ImageLink = styled.a`
  width: 250px;
  height: 250px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 16px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

class DogPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isOpen: false
    };
    this.test = this.test.bind(this);
  }

  test() {
    this.setState({ isClicked: !this.state.isClicked });
    alert(this.state.isClicked);
  }

  render() {
    return (
      <ImageLink onClick={this.test}>
        <img src={this.props.thumbnail} alt="Dog Thumbnail" />
      </ImageLink>
    );
  }
}

export default DogPicker;

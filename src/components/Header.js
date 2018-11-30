import React from "react";
import styled from "styled-components";
import logo from "../images/asana.png";

const NavigationBar = styled.div`
  height: 30px;
  border-bottom: 2px solid #ccc;
  img {
    width: 132px;
    height: 26px;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <>
        <NavigationBar role="navigation">
          <img src={logo} />
        </NavigationBar>
        <header class="global-header" role="banner">
          <h1>Puppy image gallery</h1>

          <blockquote class="header-quote">
            <p>
              A dog will teach you unconditional love. If you can have that in
              your life, things won't be too bad.
            </p>

            <cite>&mdash;Robert Wagner</cite>
          </blockquote>
        </header>
      </>
    );
  }
}

export default Header;

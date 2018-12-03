import React from "react";
import styled from "styled-components";
import logo from "../images/asana.png";

const NavigationBar = styled.div`
  height: 56px;
  padding: 0 16px;
  box-shadow: 0 1px 2px 0 rgba(36, 50, 66, 0.15);
  display: flex;
  align-items: center;
  img {
    width: 132px;
    height: 26px;
  }
`;

const GlobalHeader = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  text-align: center;

  /* Header Quote */
  .header-quote {
    color: var(--color);
    font-family: var(--font-serif);
    margin-left: auto;
    margin-right: auto;
    max-width: 460px;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <>
        <NavigationBar role="navigation">
          <img src={logo} alt="Asana Logo" />
        </NavigationBar>
        <GlobalHeader role="banner">
          <h1>Puppy image gallery</h1>

          <blockquote className="header-quote">
            <p>
              A dog will teach you unconditional love. If you can have that in
              your life, things won't be too bad.
            </p>

            <cite>&mdash;Robert Wagner</cite>
          </blockquote>
        </GlobalHeader>
      </>
    );
  }
}

export default Header;

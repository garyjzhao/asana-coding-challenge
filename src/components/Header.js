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

class Header extends React.Component {
  render() {
    return (
      <NavigationBar role="navigation">
        <img src={logo} alt="Asana Logo" />
      </NavigationBar>
    );
  }
}

export default Header;

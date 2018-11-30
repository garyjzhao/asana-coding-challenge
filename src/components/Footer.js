import React from "react";
import styled from "styled-components";

const GlobalFooter = styled.footer`
  color: var(--color);
  font-family: var(--font-serif);
  text-align: center;
`;

class Footer extends React.Component {
  render() {
    return (
      <GlobalFooter>
        <p>Built by a wonderful developer for Asana.</p>
      </GlobalFooter>
    );
  }
}

export default Footer;

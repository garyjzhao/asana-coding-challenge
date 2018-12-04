import React from "react";
import styled from "styled-components";

const GlobalFooter = styled.footer`
  color: var(--color);
  font-family: var(--font-sans-serif);
  text-align: center;
  padding: 0 16px;
`;

class Footer extends React.Component {
  render() {
    return (
      <GlobalFooter>
        <p>
          Built by{" "}
          <a
            href="http://www.garyzhao.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a wonderful developer
          </a>{" "}
          for Asana.
        </p>
      </GlobalFooter>
    );
  }
}

export default Footer;

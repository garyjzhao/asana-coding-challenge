import React from "react";
import styled from "styled-components";

const GlobalFooter = styled.footer`
  color: var(--color);
  background-color: var(--footer);
  font-family: var(--font-sans-serif);
  text-align: center;
  padding: 16px;
  a {
    color: var(--color-link);
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid var(--color-link);
    }
  }
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

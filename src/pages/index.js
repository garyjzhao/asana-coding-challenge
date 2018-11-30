import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export default () => (
  <Wrapper>
    <Header />
    <Footer />
  </Wrapper>
);

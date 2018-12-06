import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Link } from "gatsby";

import ruhoh from "../images/404.jpg";

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 420px;
  padding: 15px;
  img {
    width: 100%;
    padding: 15px 0;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <NotFoundPageWrapper>
      <img src={ruhoh} alt="Ruh-oh, you hit a page that doesn't exist" />
      <Link to="/">Let's go home.</Link>
    </NotFoundPageWrapper>
  </Layout>
);

export default NotFoundPage;

import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Link } from "gatsby";

import ruhoh from "../images/404.jpg";

const NotFoundPageWrapper = styled.div`
  width: 420px;
  margin: 15px auto;
  text-align: center;
  img {
    width: 100%;
    margin: 15px 0;
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

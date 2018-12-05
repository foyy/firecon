import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <Layout children="Yes I can hear you" />
    <h1>About them pandas</h1>
    <p>We show pandas</p>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

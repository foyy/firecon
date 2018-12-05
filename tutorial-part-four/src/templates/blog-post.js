import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div>Hello blog post</div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

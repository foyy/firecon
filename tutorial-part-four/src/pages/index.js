import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log("indexJS data ->", data);
  return (
    <Layout>
      Hello world, can you hear me?
      <div>this means that all the text will be blue</div>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      <div>
        {/* Testing out mapping over returned edges from markdown file:
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <span>TITLE:{node.frontmatter.title}</span>
            </Link>
            <span style={{ color: "red" }}>date: {node.frontmatter.date}</span>
            <br />
            <span style={{ fontSize: "50px" }}> {node.excerpt} </span>
          </div>
        ))} */}
      </div>
      <div>
        So, I only want to use this if I'm really confident in this particular
        layout
      </div>
      <div>
        LINKS!
        <Link to="/pandas-and-bananas/">
          {" "}
          Testing a link to them sweet pandas
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

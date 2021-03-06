import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

// export default ({ children }) => (
//   <div className="app-wrapper" style={{ color: "blue" }}>
//     {children}
//   </div>
// );
export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <Link to={`/my-files/`}>Check out ma files!</Link>
        {children}
      </div>
    )}
  />
);

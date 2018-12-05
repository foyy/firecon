import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children, testing }) => (
  <div style={{ margin: `0 auto` }}>
    Hey this is a footer and I'm just testing stuff so let's see what happens.
    Props are: {testing}
    <ListLink to="/about/">Go home again, why not?</ListLink>
  </div>
);

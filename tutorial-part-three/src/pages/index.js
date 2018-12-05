import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Banner from "../components/banner";

export default () => (
  <div>
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
    <Footer testing="lol hi" />
    <Banner />
  </div>
);

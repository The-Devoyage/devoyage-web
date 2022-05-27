import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/homepage/homepage-features";
import { Header } from "@site/src/components/common/header";
import { Description } from "@site/src/components/homepage/description";
const Ship = require("@site/static/img/ship-large.png").default;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Welcome to The Devoyage">
      <Header
        title={siteConfig.title}
        tagline={siteConfig.tagline}
        image={Ship}
        showWater
        buttons={{
          left: { label: "Get Started", to: "/docs/intro" },
          right: { label: "Services", to: "/services" },
        }}
      />
      <main>
        <Description />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

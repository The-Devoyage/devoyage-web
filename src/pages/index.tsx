import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/homepage/homepage-features";
import { Header } from "@site/src/components/common/header";
import { Description } from "@site/src/components/common/description";
const Ship = require("@site/static/img/logo.svg").default;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Welcome to The Devoyage">
      <Header
        title={siteConfig.title}
        tagline={siteConfig.tagline}
        Svg={Ship}
        buttons={{
          left: { label: "Get Started", to: "#homepage_description" },
          right: { label: "Services", to: "/services" },
        }}
      />
      <main>
        <div
          className="container margin-top--md"
          id="homepage_description"
          style={{
            scrollMarginTop: "calc(60px + 1rem)",
          }}
        >
          <Description
            title="Welcome To The Devoyage"
            description="The Devoyage makes building complex websites easy by providing
          pre-built APIs alongside custom development services that shape and
          mold your application to fit your modern business needs."
          />
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}

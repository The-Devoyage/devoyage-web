import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HomepageFeatures } from "@site/src/components/homepage/homepage-features";
import { Header } from "@site/src/components/common/header";
import { default as Ship } from "@site/static/img/logo.svg";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Welcome to The Devoyage">
      <div className="background--overlay" />
      <Header
        title={siteConfig.tagline}
        tagline={"Products, Services, and Articles for Streamlined Coding"}
        Svg={Ship}
        buttons={{
          left: { label: "Get Started", to: "#homepage_description" },
          right: { label: "Services", to: "/services" },
        }}
      />
      <main style={{ position: "relative" }}>
        <div
          className="container margin-top--md"
          id="homepage_description"
          style={{
            scrollMarginTop: "calc(60px + 1rem)",
          }}
        >
          <HomepageFeatures title="Features" />
        </div>
      </main>
    </Layout>
  );
}

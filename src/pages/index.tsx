import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HomepageFeatures } from "@site/src/components/homepage/homepage-features";
import { Header } from "@site/src/components/common/header";
import { Description } from "@site/src/components/common/description";
import { default as Ship } from "@site/static/img/logo.svg";
import { BadgeLink } from "../components/homepage/badges";

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
          className="container background--overlay blur margin-top--md"
          id="homepage_description"
          style={{
            scrollMarginTop: "calc(60px + 1rem)",
          }}
        >
          <Description
            title="A Micro Service Marketplace to Jump Start Projects"
            description={
              <>
                <p>
                  Downloadable APIs, Libraries, and Management Tools for your
                  next project.
                </p>
                <p>
                  <BadgeLink
                    badges={[
                      {
                        label: "Accounts API",
                        to: "/accounts/intro",
                      },
                      {
                        to: "/users/intro",
                        label: "Users API",
                      },
                      {
                        to: "/media/intro",
                        label: "File Management API",
                      },
                      {
                        label: "Auto Emailer API",
                        to: "/mailer/intro",
                      },
                      {
                        label: "Admin Panel Interface",
                        to: "/admin/intro",
                      },
                    ]}
                  />
                </p>
              </>
            }
          />
          <HomepageFeatures title="Features" />
        </div>
      </main>
    </Layout>
  );
}

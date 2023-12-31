import React, { FC, ReactNode } from "react";
import Link from "@docusaurus/Link";
import { Description } from "../../common/description";
import { BadgeLink } from "../badges";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
  button: {
    label: string;
    to: string;
  };
  links?: {
    url: string;
    image: string;
    title: string;
    description: ReactNode;
  }[];
};

const featureList: FeatureItem[] = [
  {
    title: "Productivity",
    src:
      "https://res.cloudinary.com/the-devoyage/image/upload/v1682534171/tech-cog_l4lmmk.png",
    button: { label: "Browse Products", to: "/products" },
    description: (
      <p>
        Add Code Genesis Products
        <span style={{ color: "var(--ifm-color-success)" }}>
          {" "}
          Applications and Libraries
        </span>{" "}
        to almost any stack to kick start development.
      </p>
    ),
    links: [
      {
        url: "/subgraph/intro",
        title: "Subgraph (alpha release)",
        image:
          "https://res.cloudinary.com/the-devoyage/image/upload/v1681523977/Subgraph_Logo_2_gff26m.png",
        description: (
          <span>A GraphQL API Generator with the motto Define to Run.</span>
        ),
      },
      {
        url: "https://www.github.com/the-devoyage/request-filter-language",
        title: "Request Filter Language",
        image:
          "https://res.cloudinary.com/the-devoyage/image/upload/v1675627604/The-Devoyage/RFL_Logo_1_sb6mmm.png",
        description:
          "Empower network requests by providing a standardization layer to the stack.",
      },
      {
        image:
          "https://res.cloudinary.com/the-devoyage/image/upload/v1675628120/The-Devoyage/MFG_Logo_ltsjuc.png",
        title: "Mongo Filter Generator",
        url: "https://www.github.com/the-devoyage/mongo-filter-generator",
        description:
          "Juice up your API with advanced filtering and powerful results with Mongo DB.",
      },
      {
        image:
          "https://res.cloudinary.com/the-devoyage/image/upload/v1675628792/The-Devoyage/SQG_Logo_yqxhr1.png",
        title: "Sequelize Query Generator",
        url: "https://www.github.com/the-devoyage/sequelize-query-generator",
        description:
          "Convert network requests stragith to advanced sequelize filters in a matter of minutes.",
      },
    ],
  },
  {
    title: "Support",
    src:
      "https://res.cloudinary.com/the-devoyage/image/upload/v1682533859/wrenches_yxrlke.png",
    button: { label: "Development Services", to: "/services" },
    description: (
      <p>
        Tools built so that developers can jump in to easily provide their own
        modifications{" "}
        <span style={{ color: "var(--ifm-color-success)" }}>
          with help from The Devoyage Team.
        </span>
      </p>
    ),
  },
  {
    title: "Open Source",
    src:
      "https://res.cloudinary.com/the-devoyage/image/upload/v1682534211/keys_uxhpyc.png",
    button: { label: "Github", to: "https://www.github.com/the-devoyage" },
    description: (
      <p>
        Keep the code and modify it to fit your needs.{" "}
        <span style={{ color: "var(--ifm-color-success)" }}>Open Source</span>{" "}
        products make it easy to share success with others.
      </p>
    ),
  },
];

function Feature({ title, src, description, button, links }: FeatureItem) {
  return (
    <div className="row margin-vert--xl padding--md">
      <div
        className="col col--1"
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <img src={src} width={75} />
      </div>
      <div className="col col--11">
        <div
          style={{
            height: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 className="text--center" style={{ margin: 0 }}>
            {title}
          </h3>
          <Link to={button.to}>
            <button className="button button--secondary button--outline button--sm button--block">
              {button.label}
            </button>
          </Link>
        </div>
        <h1 style={{ width: "75%" }} className="margin-bottom--xl">
          {description}
        </h1>
        <div className="container">
          <div className="row">
            {links?.map((l, i) => (
              <div className="col col--3 margin-vert--md" key={i}>
                <Link to={l.url}>
                  <div
                    className="card"
                    style={{ height: "100%", color: "white" }}
                  >
                    <div className="card__header text--center">
                      <h3>{l.title}</h3>
                    </div>
                    <div className="card__body text--center">
                      <img src={l.image} />
                    </div>
                    <div className="card__footer">{l.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {title === "Support" && (
          <div className="row">
            <Description
              title="A Micro Service Marketplace to Jump Start Development"
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
          </div>
        )}
      </div>
    </div>
  );
}

export const HomepageFeatures: FC<{ title: string }> = ({ title }) => {
  return (
    <section
      className="margin-bottom--md"
      style={{
        zIndex: 200,
        position: "relative",
      }}
    >
      <div className="col">
        {featureList.map((feature) => (
          <div key={title} className="margin-vert--md">
            <Feature {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

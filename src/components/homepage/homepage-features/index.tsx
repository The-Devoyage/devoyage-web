import React, { FC } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { default as TechCog } from "@site/static/img/tech-cog.svg";
import { default as Wrenches } from "@site/static/img/wrenches.svg";
import { default as Keys } from "@site/static/img/keys.svg";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  button: {
    label: string;
    to: string;
  };
};

const FeatureList: FeatureItem[] = [
  {
    title: "Instant Deployability",
    Svg: TechCog,
    button: { label: "Products", to: "/products" },
    description: (
      <>
        <p>
          Pre-built and pre-tested, Code Genesis Products are applications that
          you can non-invasively add to your website to kick start development.
        </p>
        <p>
          Run the services you need alongside your API to extend the
          functionality of your web application.
        </p>
      </>
    ),
  },
  {
    title: "Easy To Edit",
    Svg: Wrenches,
    button: { label: "Services", to: "/services" },
    description: (
      <>
        <p>
          They are micro-services built so that developers can jump in to easily
          provide their own modifications, if desired. The goal is to keep them
          easy to edit for anyone.
        </p>
        <p>
          Add your own private additions or contribute to the open source
          projects so others can benefit from your modifications.
        </p>
      </>
    ),
  },
  {
    title: "Own Your Code",
    Svg: Keys,
    button: { label: "Learn More", to: "/blog" },
    description: (
      <>
        <p>
          Keep the code you download, modify it to fit your needs, and always
          have access to the most up to date versions of our products.
        </p>
        <p>
          We are not a Software as a Subscription business, so you do not lose
          your code when you choose to stop paying. You own your code, the way
          it should be.
        </p>
      </>
    ),
  },
];

function Feature({ title, Svg, description, button }: FeatureItem) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div className="card__header">
        <div className="card__image text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="card__body">
        <div>
          <h3 className="text--center">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card__footer">
        <Link to={button.to}>
          <button className="button button--secondary button--outline button--md button--block">
            {button.label}
          </button>
        </Link>
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
      <div className="row ">
        {FeatureList.map((props) => (
          <div key={title} className="col col--4 margin-vert--md">
            <Feature {...props} />
          </div>
        ))}
      </div>
    </section>
  );
};

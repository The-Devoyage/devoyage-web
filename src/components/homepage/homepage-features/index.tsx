import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

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
    title: "Code Genesis Products",
    Svg: require("@site/static/img/tech-cog.svg").default,
    button: { label: "Our Products", to: "/products" },
    description: (
      <>
        Pre-built and pre-tested, Code Genesis Products are applications that
        you can non-invasively add to your website to kick start development.
        With features such as file uploading, user management, and
        triggered/automated emails -- you own the functionality and control the
        code with a little help from some friends at The Devoyage.
      </>
    ),
  },
  {
    title: "Development Services",
    Svg: require("@site/static/img/wrenches.svg").default,
    button: { label: "Our Services", to: "/services" },
    description: (
      <>
        Hire us to work on your application or ping us to add that next feature
        to our existing products so you can focus on what matters to your
        business. We are here to help in any way possible!
      </>
    ),
  },
  {
    title: "Own Your Code",
    Svg: require("@site/static/img/keys.svg").default,
    button: { label: "Learn More", to: "/blog" },
    description: (
      <>
        Keep the code you get, modify it to fit your needs, and always have
        access to the most up to date versions of our products. We are not a
        Software as a Subscription business, and you do not loose your code when
        you choose to stop paying. You own your code -- the way it should be.
      </>
    ),
  },
];

function Feature({ title, Svg, description, button }: FeatureItem) {
  return (
    <div
      className={clsx("col col--4")}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div className="text--center margin-bottom--md">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className="margin-vert--lg">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <Link to={button.to}>
        <button className="button button--secondary button--outline button--md button--block margin-top--md">
          {button.label}
        </button>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(styles.features, "margin-bottom--lg")}>
      <div className="container">
        <div className="row" style={{ height: "100%" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

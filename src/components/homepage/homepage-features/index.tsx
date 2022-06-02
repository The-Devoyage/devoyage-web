import React from "react";
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
        triggered/automated emails you own the functionality and control the
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
        The Devoyage delivers custom built websites designed to fit your needs
        and specifications. By providing a preliminary itemized estimate that
        lays out exactly what we can offer you, we ensure a clear upfront plan
        for your web applications success.
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
        Software as a Subscription business, so you do not loose your code when
        you choose to stop paying. You own your code -- the way it should be.
      </>
    ),
  },
];

function Feature({ title, Svg, description, button }: FeatureItem) {
  return (
    <div
      className="card shadow--md"
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="margin-bottom--md">
      <div className="row ">
        {FeatureList.map((props) => (
          <div key={props.title} className="col col--4 margin-vert--md">
            <Feature {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Link from "@docusaurus/Link";

export const BlogFooter = () => {
  return (
    <div
      className="alert alert--info margin-vert--lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div className="avatar">
        <a
          className="avatar__photo-link avatar__photo avatar__photo--lg"
          href="https://medium.com/@thedevoyage"
        >
          <img
            alt="Nick McLean Profile Image"
            src="https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"
          />
        </a>
        <div className="avatar__intro">
          <div className="avatar__name">Nick McLean</div>
          <small className="avatar__subtitle padding-bottom--md">
            Thanks for following along. If you would like to keep up to date
            make sure to check in frequently and/or follow us below!
          </small>
          <div>
            {[
              { to: "https://medium.com/@thedevoyage", label: "Medium" },
              { to: "https://twitter.com/thedevoyage", label: "Twitter" },
              { to: "https://thedevoyage.slack.com", label: "Slack" },
              {
                to: "https://thedevoyage.gumroad.com/subscribe",
                label: "Newsletter",
              },
            ].map((source) => (
              <Link to={source.to} key={source.to}>
                <button
                  className="button button--primary margin-right--md"
                  style={{
                    color: "#fff",
                    backgroundColor: "var(--ifm-color-dark-blue)",
                  }}
                >
                  {source.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

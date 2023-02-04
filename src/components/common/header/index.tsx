import React, { FC } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

interface HeaderProps {
  title: string;
  tagline: string;
  buttons: {
    left: {
      label: string;
      to: string;
    };
    right: {
      label: string;
      to: string;
    };
  };
  Svg: any;
}

export const Header: FC<HeaderProps> = ({ title, tagline, buttons, Svg }) => {
  return (
    <header
      className={clsx("shadow--tl", styles.header, "background--overlay")}
    >
      <div className={clsx(styles.tagline_container)}>
        <div className={clsx(styles.tagline_flex)}>
          <h1 className={clsx(styles.title)}>{title}</h1>
          <p
            className={clsx(styles.tagline)}
            style={{
              width: "75%",
            }}
          >
            {tagline}
          </p>
          <div className={clsx("row", styles.button_container)}>
            <Link
              to={buttons.left.to}
              className={clsx(styles.link, "col col--6")}
            >
              <button
                className={clsx(
                  "button button--primary button--block button--lg margin-vert--md"
                )}
              >
                {buttons.left.label}
              </button>
            </Link>
            <Link
              to={buttons.right.to}
              className={clsx(styles.link, "col col--6")}
            >
              <button
                className={clsx(
                  "button button--secondary button--block button--outline button--lg margin-vert--md"
                )}
              >
                {buttons.right.label}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx(styles.svg_container)}>
        <Svg className={clsx(styles.boat)} />
      </div>
      <div>
        <svg
          className={clsx(styles.waves)}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="50 24 75 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="rgba(180,197,228,0.7)"
            />
          </defs>
          <g className={clsx(styles.parallax)}>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(180,197,228,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(180,197,228,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(180,197,228,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </header>
  );
};

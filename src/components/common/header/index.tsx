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
    <header className={clsx("shadow--tl", styles.heroBanner)}>
      <div className="row">
        <div
          className="col col--6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            zIndex: 100,
          }}
        >
          <h1 className="hero__title margin--lg">{title}</h1>
          <p className="hero__subtitle margin-vert--lg padding--lg">
            {tagline}
          </p>
          <div>
            <Link to={buttons.left.to}>
              <button className="button button--primary button--lg margin-vert--md">
                {buttons.left.label}
              </button>
            </Link>
            <Link to={buttons.right.to}>
              <button className="button button--secondary button--outline button--lg margin-horiz--md margin-vert--md">
                {buttons.right.label}
              </button>
            </Link>
          </div>
        </div>
        <div
          className="col col--6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Svg className={clsx(styles.boat)} />
        </div>
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

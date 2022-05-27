import React, { FC } from "react";
import styles from "./styles.module.css";
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
  image: any;
}

export const Header: FC<HeaderProps> = ({ title, tagline, buttons, image }) => {
  return (
    <header className={clsx("hero hero--light shadow--tl", styles.heroBanner)}>
      <div
        className="row row--no-gutters"
        style={{ width: "100%", zIndex: 100 }}
      >
        <div className="col col--7">
          <h1 className="hero__title margin-vert--lg">{title}</h1>
          <p className="hero__subtitle margin-vert--lg padding--lg">
            {tagline}
          </p>
          <Link to={buttons.left.to}>
            <button className="button button--primary button--lg">
              {buttons.left.label}
            </button>
          </Link>
          <Link to={buttons.right.to}>
            <button className="button button--secondary button--outline button--lg margin-horiz--md">
              {buttons.right.label}
            </button>
          </Link>
        </div>
        <div className={clsx(styles.boatDiv, "container col col--5")}>
          <img src={image} className={clsx("col col--8", styles.boat)} />
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

import React, { FC } from "react";
import Link from "@docusaurus/Link";
import { ProductInfo } from "@site/src/pages/products";
import clsx from "clsx";

export const ProductCard: FC<ProductInfo> = ({
  title,
  description,
  image,
  link,
  badge,
  examples,
}) => {
  return (
    <div
      className="card shadow--md"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
        zIndex: 200,
      }}
    >
      <div className="card__image">
        <span
          className="badge badge--secondary margin--md"
          style={{ position: "absolute", right: 0 }}
        >
          {badge}
        </span>
        <Link to={link}>
          <img
            src={image}
            className="margin-top--md"
            style={{ width: "25%" }}
          />
        </Link>
      </div>
      <div className="card__body margin--sm">
        <div>
          <h3>{title}</h3>
          <small>{description}</small>
        </div>
      </div>
      <div className="row row--no-gutters card__footer margin--sm">
        {examples.length ? (
          <div
            className="dropdown dropdown--hoverable col col--6 text--left"
            style={{ position: "relative", fontSize: "0.8rem" }}
          >
            Examples
            <ul className="dropdown__menu">
              {examples.map((e) => (
                <li key={e.label}>
                  <Link to={e.to} className="dropdown__link">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Link
          to={link}
          className={clsx("col text--right", {
            "col--6": examples.length,
            "col--12": !examples.length,
          })}
        >
          <button className="button button--secondary button--sm button--outline button--block">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

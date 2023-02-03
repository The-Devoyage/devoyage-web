import React, { FC } from "react";
import Link from "@docusaurus/Link";

interface ProductCardProps {
  title: string;
  description: string;
  image: any;
  buttons?: { label: string; to?: string }[];
  badges?: string[];
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  image,
  buttons,
  badges,
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
        <img src={image} />
      </div>
      <div className="card__body">
        <div>
          <h4>{title}</h4>
          <small>{description}</small>
        </div>
        <div className="margin-top--sm">
          {badges?.map((b) => (
            <span key={b} className="badge badge--secondary margin-right--sm">
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="row card__footer">
        {buttons?.map((b) => (
          <div key={b.label} className={`col col--${12 / buttons.length}`}>
            <Link to={b.to}>
              <button
                disabled={!b.to}
                className="button button--secondary button--outline button--md button--block margin-top--md"
              >
                {b.label}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

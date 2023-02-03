import React, { FC } from "react";
import Link from "@docusaurus/Link";

interface BadgeLinkProps {
  badges: { label: string; to: string }[];
}

export const BadgeLink: FC<BadgeLinkProps> = ({ badges }) => {
  return (
    <>
      {badges.map((b, i) => (
        <Link
          key={i}
          to={b.to}
          className="badge badge--link badge--secondary margin-right--sm"
        >
          {b.label}
        </Link>
      ))}
    </>
  );
};

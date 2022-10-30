import React, { FC } from "react";
import Link from "@docusaurus/Link";

export const LicenseAlert: FC<{ product: string; to: string }> = ({
  product,
  to,
}) => {
  return (
    <div
      className="alert alert--info margin-vert--lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      Want to support `@the-devoyage/{product}`?
      <Link to={to}>
        <button className="button button--primary">Purchase MIT License</button>
      </Link>
    </div>
  );
};

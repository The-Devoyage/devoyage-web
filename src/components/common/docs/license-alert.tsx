import React, { FC } from "react";
import Link from "@docusaurus/Link";

export const LicenseAlert: FC<{
  product: string;
  to: string;
  message?: string;
  btnTxt?: string;
}> = ({ product, to, message, btnTxt }) => {
  return (
    <div
      className="alert alert--info margin-vert--lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {message || <span>Want to support `@the-devoyage/{product}`?</span>}
      <Link to={to}>
        <button className="button button--primary">
          {btnTxt || "Purchase MIT License"}
        </button>
      </Link>
    </div>
  );
};

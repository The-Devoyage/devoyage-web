import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface DescriptionProps {
  title: string;
  description: ReactNode;
}

export const Description: FC<DescriptionProps> = ({ title, description }) => {
  return (
    <div className={clsx("card shadow--md", styles.cardDescription)}>
      <div
        className="card__body row margin-vert--lg col col--10"
        style={{ alignItems: "center" }}
      >
        <h1 className="text--primary col col--4">{title}</h1>
        <p className="col col--8" style={{ fontSize: "1.5rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

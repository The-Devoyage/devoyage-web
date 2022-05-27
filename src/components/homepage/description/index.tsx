import React from "react";

export const Description = () => {
  return (
    <div
      className="card shadow--md margin--md margin--lg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="card__body row margin-vert--lg col col--8 text--center"
        style={{ alignItems: "center" }}
      >
        <h1 className=" text--primary col col--4">Welcome To The Devoyage</h1>
        <p className="col col--8" style={{ fontSize: "1.5rem" }}>
          The Devoyage makes building complex websites easy by providing
          pre-built APIs alongside custom development services that shape and
          mold your application to fit your modern business needs.
        </p>
      </div>
    </div>
  );
};

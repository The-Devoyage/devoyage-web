import React from "react";
import Layout from "@theme/Layout";
import { Header } from "@site/src/components/common/header";
const Wrenches = require("@site/static/img/wrenches.png").default;

const Services = () => {
  return (
    <Layout>
      <Header
        title="Development Services"
        tagline="Have an idea? Let's bring it to life."
        image={Wrenches}
        buttons={{
          left: { label: "Learn More", to: "/docs" },
          right: { label: "MMHM", to: "" },
        }}
      />
    </Layout>
  );
};

export default Services;

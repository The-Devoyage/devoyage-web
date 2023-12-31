import Layout from "@theme/Layout";
import React from "react";
import { Header } from "@site/src/components/common/header";
import { ProductCard } from "../components/products/product-card";
import { Description } from "../components/common/description";
import { default as Ship } from "@site/static/img/logo.svg";

export interface ProductInfo {
  title: string;
  description: string;
  image: string;
  link?: string;
  badge?: string;
  examples: { label: string; to: string }[];
}

const products: ProductInfo[] = [
  {
    title: "Subgraph",
    description:
      "Dynamically generate a functional API from a simple configuration/schema.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1681523977/Subgraph_Logo_2_gff26m.png",
    link: "/subgraph/intro",
    badge: "v0.0.13",
    examples: [
      {
        label: "Configurations",
        to: "https://github.com/The-Devoyage/subgraph/tree/master/examples",
      },
    ],
  },
  {
    title: "Request Filter Language",
    description:
      "A library to help standardize the shape of network requests for both API and Client Side development.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1675627604/The-Devoyage/RFL_Logo_1_sb6mmm.png",
    link: "https://github.com/The-Devoyage/request-filter-language",
    badge: "v0.0.5",
    examples: [
      {
        label: "React Admin Starter",
        to: "https://github.com/The-Devoyage/admin-starter",
      },
      {
        label: "Orions Arrow SDK",
        to: "https://github.com/the-devoyage/orions-arrow",
      },
    ],
  },
  {
    title: "Sequelize Query Generator",
    description:
      "Instantly add advanced filtering, pagination, and statistical querying to restful or GraphQL APIs.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1675628792/The-Devoyage/SQG_Logo_yqxhr1.png",
    link: "https://github.com/the-devoyage/sequelize-query-generator",
    badge: "v0.0.5",
    examples: [],
  },
  {
    title: "Mongo Filter Generator",
    description:
      "Easily add Find, filter, paginating functionality to API routes/resolvers with just a few lines of code.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1675628120/The-Devoyage/MFG_Logo_ltsjuc.png",
    link: "https://github.com/the-devoyage/mongo-filter-generator",
    badge: "v0.5.1",
    examples: [
      {
        label: "GraphQL Users API",
        to: "https://github.com/the-devoyage/graphql-users",
      },
      {
        label: "GraphQL Accounts API",
        to: "https://www.github.com/the-devoyage/graphql-accounts",
      },
      {
        label: "GraphQL Media API",
        to: "https://www.github.com/the-devoyage/graphql-media",
      },
      {
        label: "GraphQL Mailer API",
        to: "https://www.github.com/the-devoyage/graphql-mailer",
      },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      <div className="background--overlay" />
      <Header
        title="Code Genesis Products"
        tagline="Micro Services, Libraries, and More"
        Svg={Ship}
        buttons={{
          left: { label: "Products", to: "#code_genesis_products" },
          right: { label: "Learn More", to: "#code_genesis_description" },
        }}
      />
      <main className="container" style={{ position: "relative" }}>
        <div
          className="margin-top--md"
          style={{ scrollMarginTop: "calc(60px + 1rem)" }}
          id="code_genesis_description"
        >
          <Description
            title="Code Genesis is Just The Start"
            description={
              <>
                Code Genesis Products are made to assist speedy and high quality
                development. From starter applications to stand alone services,
                our Code Genesis Products are here to lend a helping hand for
                your next project.
              </>
            }
          />
        </div>
        <section
          className="row"
          style={{
            height: "100%",
          }}
        >
          {products.map((p) => (
            <div
              key={p.title}
              className="col col--4 margin-vert--md"
              style={{ scrollMarginTop: "calc(60px + 1rem)" }}
              id="code_genesis_products"
            >
              <ProductCard {...p} />
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Products;

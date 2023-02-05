import Layout from "@theme/Layout";
import React from "react";
import { Header } from "@site/src/components/common/header";
import { ProductCard } from "../components/products/product-card";
import { Description } from "../components/common/description";
import { default as TechCog } from "@site/static/img/tech-cog.svg";

interface ProductInfo {
  title: string;
  description: string;
  image: any;
  links?: { label: string; to?: string }[];
  tags?: string[];
}

const products: ProductInfo[] = [
  {
    title: "Orion's Arrow",
    description:
      "A SDK to Easily Connect React Applications to the Code Genesis APIs.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1667677652/The-Devoyage/Orion_s_Arrow_vxpcsl.png",
    links: [
      {
        label: "GitHub",
        to: "https://github.com/The-Devoyage/orions-arrow",
      },
      { label: "Docs", to: "/orions-arrow/intro" },
    ],
    tags: ["SDK", "React"],
  },
  {
    title: "Admin Starter",
    description:
      "Using any of the code genesis products? The Admin starter instantly connects and allows you to manage Accounts, Users, Media, and more.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1653518309/The-Devoyage/admin_l1yxsd.png",
    links: [{ label: "Coming Soon" }],
    tags: ["Manage Data", "Website Statistics"],
  },
  {
    title: "GraphQL Gateway",
    description:
      "A gateway that is ready for your application as it grows including features such as authorization, graphql file routing, and pre-built global context.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653516541/The-Devoyage/graphql-gateway_lp04zs.jpg",
    links: [
      {
        label: "GitHub",
        to: "https://github.com/The-Devoyage/graphql-gateway",
      },
      { label: "Docs", to: "/gateway/intro" },
    ],
    tags: ["Security", "Request Routing", "Secure Proxies"],
  },
  {
    title: "GraphQL Accounts",
    description:
      "Authorize access to your application with this federated micro-service.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653515760/The-Devoyage/graphql-accounts_jlkmfo.jpg",
    links: [
      {
        label: "GitHub",
        to: "https://www.github.com/the-devoyage/graphql-accounts",
      },
      { label: "Docs", to: "/accounts/intro" },
    ],
    tags: ["Authenticate", "Secure", "Identify"],
  },
  {
    title: "GraphQL Users",
    description: "Save and manage user data and enable account memberships.",

    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653515746/The-Devoyage/graphql-users_xqmtxr.jpg",
    links: [
      {
        label: "GitHub",
        to: "https://www.github.com/the-devoyage/graphql-users",
      },
      { label: "Docs", to: "/users/intro" },
    ],
    tags: ["User Data", "Memberships", "Profiles", "Identity"],
  },
  {
    title: "GraphQL Media",
    description:
      "Upload and serve files and images with this federated micro-service.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1653515788/The-Devoyage/graphql-media_jwuhfx.png",
    links: [
      {
        label: "GitHub",
        to: "https://www.github.com/the-devoyage/graphql-media",
      },
      { label: "Docs (soon!)" },
    ],
    tags: ["File Uploads", "Images", "PDFs"],
  },
  {
    title: "GraphQL Mailer",
    description:
      "An automated mailing server that listens for triggers in order to send your users custom HTML content.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_pad,h_300,w_600/v1667792598/The-Devoyage/Mailer_kvhivi.png",
    links: [
      {
        label: "GitHub",
        to: "https://www.github.com/the-devoyage/graphql-mailer",
      },
      { label: "Docs (soon!)" },
    ],
    tags: ["Automated Emails", "Custom Templates"],
  },
];

const Products = () => {
  return (
    <Layout>
      <div className="background--overlay" />
      <Header
        title="Code Genesis Products"
        tagline="Micro Services, Libraries, and More"
        Svg={TechCog}
        buttons={{
          left: { label: "Products", to: "#code_genesis_products" },
          right: { label: "Learn More", to: "#code_genesis_description" },
        }}
      />
      <main className="container" style={{ position: "relative" }}>
        <div
          className="margin-top--md background--overlay blur"
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
              <ProductCard
                title={p.title}
                description={p.description}
                image={p.image}
                buttons={p.links?.map((linkInfo) => linkInfo)}
                badges={p.tags}
              />
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Products;

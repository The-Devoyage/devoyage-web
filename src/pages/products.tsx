import Layout from "@theme/Layout";
import React from "react";
import { Header } from "@site/src/components/common/header";
import { ProductCard } from "../components/products/product-card";
import { Description } from "../components/common/description";
const TechCog = require("@site/static/img/tech-cog.svg").default;

interface ProductInfo {
  title: string;
  description: string;
  image: any;
  links?: { label: string; to?: string }[];
  tags?: string[];
}

const products: ProductInfo[] = [
  {
    title: "Orions Arrow",
    description:
      "A fully featured API, ready to deploy Admin Panel, and a React Starter -- Everything that The Devoyage has to offer bundled in one easy to spin up bundle.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_lpad,h_300,w_600/v1653517435/The-Devoyage/full-stack-logo_yklrpi.jpg",
    links: [{ label: "Coming Soon" }],
    tags: ["Searchable API", "Admin Panel", "Website Starter"],
  },
  {
    title: "Admin Starter",
    description:
      "Using any of the code genesis products? The Admin starter instantly connects and allows you to manage Accounts, Users, Media, and more.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653518309/The-Devoyage/admin_l1yxsd.png",
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
      { label: "Docs", to: "/gateway/gateway-intro" },
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
      { label: "Docs", to: "/accounts/accounts-intro" },
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
      { label: "Docs (soon!)" },
    ],
    tags: ["User Data", "Memberships", "Profiles", "Identity"],
  },
  {
    title: "GraphQL Media",
    description:
      "Upload and serve files and images with this federated micro-service.",
    image:
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653515788/The-Devoyage/graphql-media_jwuhfx.png",
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
      "https://res.cloudinary.com/the-devoyage/image/upload/c_fill,h_300,w_600/v1653515776/The-Devoyage/graphql-mailer_rebml7.jpg",
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
      <Header
        title="Code Genesis"
        tagline="Pre-built -- Pre-Tested & Easy to Integrate"
        Svg={TechCog}
        buttons={{
          left: { label: "Our Products", to: "#code_genesis_products" },
          right: { label: "Learn More", to: "#code_genesis_description" },
        }}
      />
      <main className="container">
        <div
          className="margin-top--md"
          style={{ scrollMarginTop: "calc(60px + 1rem)" }}
          id="code_genesis_description"
        >
          <Description
            title="Code Genesis is Just The Start"
            description="Code Genesis Products are made to assist speedy and high quality development. From starter applications to stand alone services, our Code Genesis Products are here to lend a helping hand for developers and clients alike."
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

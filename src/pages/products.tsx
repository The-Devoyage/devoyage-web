import Layout from "@theme/Layout";
import React from "react";
import { Header } from "@site/src/components/common/header";
import { ProductCard } from "../components/products/product-card";
const TechCog = require("@site/static/img/tech-cog.png").default;

interface ProductInfo {
  title: string;
  description: string;
  image: any;
  links?: { label: string; to?: string }[];
  tags?: string[];
}

const products: ProductInfo[] = [
  {
    title: "Full Stack Starter",
    description:
      "A fully featured API, ready to deploy Admin Panel, and a React Starter -- Everything that The Devoyage Has To Offer Bundled In One Easy To Spin Up Compose File.",
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
      { label: "Docs", to: "/docs/intro" },
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
      { label: "Docs", to: "/docs/intro" },
    ],
    tags: ["Autorize", "Authenticate", "Security"],
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
      { label: "Docs", to: "/docs/intro" },
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
      { label: "Docs", to: "/docs/intro" },
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
      { label: "Docs", to: "/docs/intro" },
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
        image={TechCog}
        buttons={{
          left: { label: "Get Started", to: "/docs" },
          right: { label: "Learn More", to: "" },
        }}
      />
      <main>
        <div>Put description here.</div>
        <div className="row margin--lg" style={{ height: "100%" }}>
          {products.map((p) => (
            <div key={p.title} className="col col--4 padding--lg">
              <ProductCard
                title={p.title}
                description={p.description}
                image={p.image}
                buttons={p.links?.map((linkInfo) => linkInfo)}
                badges={p.tags}
              />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Products;

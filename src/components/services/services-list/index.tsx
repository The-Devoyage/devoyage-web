import React, { ReactNode } from "react";

const services: { name: string; description: ReactNode; badges: string[] }[] = [
  {
    name: "Frontend Development",
    description: (
      <>The website, design, and interface that your users interact with.</>
    ),
    badges: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Backend Development",
    description: (
      <>
        Store sensitive sensitive on the server and use modern networking tools
        to secure the data. The backend allows the frontend to access the
        information within the databse.
      </>
    ),
    badges: ["Express", "GraphQL", "Apollo Server", "Mongo Database"],
  },
  {
    name: "Admin Panel",
    description: (
      <>
        Allow higher level users to easilly edit all data within the databse,
        contact users, view site statistics, and design email templates for your
        business.
      </>
    ),
    badges: ["React", "GraphQL", "Apollo Client", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Copy",
    description: (
      <>
        Connect with writing specialists to create descriptions and content that
        represents your product accuratly.
      </>
    ),
    badges: ["Writing", "Text"],
  },
  {
    name: "Design",
    description: (
      <>
        Work with design experts and use industry standard tooling to create a
        website styled specifcally for your business.
      </>
    ),
    badges: ["Wireframes", "Figma", "CoreUI"],
  },
  {
    name: "Deployment",
    description: (
      <>
        We find and deploy your application to affordable, secure, and reliable
        servers that fit your budget and applications needs.
      </>
    ),
    badges: ["Docker", "Containerized", "Scalable", "SSL", "Secure"],
  },
  {
    name: "Source Code",
    description: <>You always have access to your source code.</>,
    badges: ["Git", "Github"],
  },
  {
    name: "Code Genesis Products",
    description: (
      <>
        Choose to use our Code Genesis Products to kick start development and
        always have acess to the newest features and services that we provide.
      </>
    ),
    badges: [
      "Accounts",
      "Users",
      "File Uploads",
      "Automated Emails",
      "Paywalls",
    ],
  },
];

export const ServicesList = () => {
  return (
    <>
      <div className="card margin-bottom--md shadow--md">
        <div className="card__header text--center">
          <h2>Our Services</h2>
        </div>
        <div className="card__body">
          {services.map((s) => (
            <div key={s.name} className="row padding--md">
              <div className="col col--2 margin-vert--sm">
                <h4 style={{ marginBottom: 0 }}>{s.name}</h4>
              </div>
              <div className="col col--8">
                <p className="margin--sm">{s.description}</p>
              </div>
              <div className="col col--2">
                {s.badges.map((b) => (
                  <div key={b} className="badge badge--secondary margin--sm">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

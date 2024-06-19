import React from "react";
import Layout from "@theme/Layout";
import { Header } from "@site/src/components/common/header";
import { Description } from "../components/common/description";
import { SequencedCard } from "../components/common/sequenced-card";
import { ServicesList } from "../components/services/services-list";
import { default as Ship } from "@site/static/img/logo.svg";

const Services = () => {
  return (
    <Layout>
      <Header
        title="Services"
        tagline="Technology Solutions for Your Business Needs"
        Svg={Ship}
        buttons={{
          left: {
            label: "Let's Talk",
            to: "https://thedevoyage.gumroad.com/l/itemized-estimate",
          },
          right: { label: "Learn More", to: "#services_description" },
        }}
      />
      <main className="container">
        <div
          className="margin-top--md background--overlay"
          style={{ scrollMarginTop: "calc(60px + 1rem)" }}
          id="services_description"
        >
          <Description
            title="Consultations, Design, Development, and Launch"
            description={
              <>
                The Devoyage offers a range of services to help you get your
                business online. From consultations to design and development,
                we are here to help you every step of the way.
              </>
            }
          />
        </div>
        <SequencedCard
          seconds={5}
          cards={[
            {
              pill: "Consultations",
              header: "Share Your Vision",
              image:
                "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg",
              body: (
                <h3>
                  Need help getting started? We are here to help you understand
                  what it takes to get your business online.
                  <br />
                  <br />
                  Every business is unique, and we are here to help you find the
                  right technology solutions for your business needs. We offer
                  free consultations to help you get started.
                </h3>
              ),
            },
            {
              pill: "Web Apps",
              header: "Design Your Application",
              image:
                "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              body: (
                <h3>
                  Professional design, tailored to your business needs. Trained
                  and experienced developers are here to design, develop, and
                  launch your application.
                  <br />
                  <br />
                  With a focus on user experience, scalability, performance, and
                  security, we are here to help you build a successful
                  application.
                </h3>
              ),
            },
            {
              pill: "Tooling and Libraries",
              header: "Let's Code",
              image:
                "https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              body: (
                <h3>
                  Get help designing and developing tools and libraries to help
                  you build your application. We specialize in creating internal
                  tools to streamline your development process.
                  <br />
                  <br />
                  We offer a range of tools and libraries to help you get your
                  application online faster. Additionally, we can help you
                  develop custom tools and libraries to meet your specific
                  needs.
                </h3>
              ),
            },
            {
              pill: "Dev Ops",
              header: "Launch Your Application",
              image:
                "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              body: (
                <h3>
                  Weather you want to host your application on a cloud provider
                  or on your own servers, we can help you get your application
                  online.
                  <br />
                  <br />
                  We specialize in deploying applications to the cloud and
                  setting up continuous integration and continuous deployment
                  pipelines.
                </h3>
              ),
            },
          ]}
        />
        <ServicesList />
      </main>
    </Layout>
  );
};

export default Services;

import React from "react";
import Layout from "@theme/Layout";
import { Header } from "@site/src/components/common/header";
import { Description } from "../components/common/description";
import { SequencedCard } from "../components/common/sequenced-card";
import { ServicesList } from "../components/services/services-list";
const Wrenches = require("@site/static/img/wrenches.svg").default;

const Services = () => {
  return (
    <Layout>
      <Header
        title="Development Services"
        tagline="An Open Ocean of Opportunities for your Business Plans"
        Svg={Wrenches}
        buttons={{
          left: {
            label: "Free Consultation",
            to: "https://thedevoyage.gumroad.com/l/itemized-estimate",
          },
          right: { label: "Learn More", to: "#services_description" },
        }}
      />
      <main className="container">
        <div
          className="margin-top--md"
          style={{ scrollMarginTop: "calc(60px + 1rem)" }}
          id="services_description"
        >
          <Description
            title="Professional, Customized, and Stylish Development"
            description={
              <>
                Share your vision and we will take care of the rest. The
                Devoyage works directly with you to create a customized website
                specific to your needs, preferences, and budget.
              </>
            }
          />
        </div>
        <SequencedCard
          seconds={4}
          cards={[
            {
              pill: "Share",
              header: "Free Consultation",
              body: (
                <h3>
                  The Devoyage takes your ideas and creates a customized website
                  specific to your needs and preferences.
                  <br />
                  <br />
                  All you need to do to get started is share your vision and we
                  will be ready to help navigate.
                </h3>
              ),
            },
            {
              pill: "Plan",
              header: "Itemized Estimate",
              body: (
                <h3>
                  Every client receives a Itemized Estimate, in which we lay out
                  a professional plan in clear and simple terms that anyone can
                  follow.
                  <br />
                  <br />
                  You get an accurate quote and timeline alongside a clear idea
                  of the expectations that your new application will provide.
                </h3>
              ),
            },
            {
              pill: "Design",
              header: "Match Your Look",
              body: (
                <h3>
                  Bring your own designs or let us help create a design that
                  matches your business. It is importat to us that you know what
                  your application will look like before even starting the
                  development process.
                  <br />
                  <br />
                  Work with Copy and Design Professionals to create the style
                  that perfectly matches your business.
                </h3>
              ),
            },
            {
              pill: "Develop",
              header: "Let's Code",
              body: (
                <h3>
                  Once you are happy with the plan and design, it is finally
                  time to start building your application.
                  <br />
                  <br />
                  Focus on your business while we follow the guidence of the
                  plan and design. A great plan leads to great success.
                </h3>
              ),
            },
            {
              pill: "Launch",
              header: "The Big Day",
              body: (
                <h3>
                  Once you are happy with your product, we are here to help push
                  it to the internet.
                  <br />
                  <br />
                  Add new features as needed or tweak the application to fit the
                  needs of your user. At this point we can help maintain a
                  healthy website.
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

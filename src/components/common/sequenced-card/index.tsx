import Link from "@docusaurus/Link";
import React, { FC, ReactNode } from "react";
import "./styles.css";

interface SequencedCardProps {
  seconds: number;
  cards: {
    pill: string;
    header: string;
    body: ReactNode;
    image: string;
  }[];
}

export const SequencedCard: FC<SequencedCardProps> = ({ seconds, cards }) => {
  return (
    <div className="margin-vert--md">
      {cards.map((c, idx) => (
        <div
          key={c.pill}
          style={{
            minHeight: 300,
            background: ![1, 3].includes(idx) && "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            border: ![1, 3].includes(idx) && "1px solid #eaecef",
          }}
        >
          {idx === 0 && (
            <img
              src={c.image}
              alt="development image"
              height="400"
              style={{
                objectFit: "cover",
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
              }}
            />
          )}
          <div
            className="row row--no-gutters padding--lg"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col col--10">
              <div
                className="card__body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <div className="service-card">
                    {idx === 3 && (
                      <img
                        src={c.image}
                        alt="development image"
                        height="300"
                        width="300"
                        style={{
                          objectFit: "cover",
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                          marginRight: 20,
                        }}
                      />
                    )}
                    <div>
                      <h1>{c.header}</h1>
                      {c.body}
                    </div>
                    {idx === 1 && (
                      <img
                        src={c.image}
                        alt="development image"
                        height="300"
                        width="300"
                        style={{
                          objectFit: "cover",
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        }}
                      />
                    )}
                  </div>
                </div>
                {idx === cards.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link href="https://thedevoyage.gumroad.com/l/itemized-estimate">
                      <button className="button button--primary button--outline">
                        Free Consultation
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

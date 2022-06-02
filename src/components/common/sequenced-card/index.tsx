import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.css";

interface SequencedCardProps {
  seconds: number;
  cards: {
    pill: string;
    header: string;
    body: ReactNode;
  }[];
}

export const SequencedCard: FC<SequencedCardProps> = ({ seconds, cards }) => {
  const [activePill, setActivePill] = useState<string>(cards[0].pill);
  const [shouldSequence, setShouldSequence] = useState(true);
  const pills = cards.map((c) => c.pill);

  useEffect(() => {
    if (shouldSequence) {
      if (pills.length > 1) {
        const currentPillIndex = pills.findIndex((p) => p === activePill);
        let nextPill = pills[0];
        if (currentPillIndex !== pills.length - 1) {
          nextPill = pills[currentPillIndex + 1];
        }
        const interval = setInterval(
          () => setActivePill(nextPill),
          seconds * 1000
        );
        return () => clearInterval(interval);
      }
    } else {
      const resetSequence = setTimeout(() => {
        setShouldSequence(true);
      }, 30000);

      return () => clearTimeout(resetSequence);
    }
  }, [pills, shouldSequence]);

  return (
    <div className="card shadow--md margin-vert--md">
      <div className="card__header">
        <ul className="pills pills--block">
          {pills.map((p) => (
            <li
              key={p}
              onClick={() => {
                setActivePill(p);
                setShouldSequence(false);
              }}
              className={clsx(
                "pills__item",
                `${activePill === p ? "pills__item--active" : ""}`
              )}
            >
              <h2 style={{ marginBottom: 0 }}>{p}</h2>
            </li>
          ))}
        </ul>
      </div>
      {cards.map((c, idx) => (
        <div
          key={c.pill}
          style={{ minHeight: 300 }}
          className={clsx(
            "card shadow--tl margin--md",
            `${activePill === c.pill ? styles.activeCard : styles.hiddenCard}`
          )}
        >
          <div
            className="row row--no-gutters"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div className="col col--2">
              <div
                className="card__header"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="badge badge--secondary">
                  <h1
                    className="margin-horiz--lg"
                    style={{ marginBottom: 0, fontSize: "5rem" }}
                  >
                    {idx + 1}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col col--10">
              <div className="card__body">
                <h1>{c.header}</h1>
                {c.body}
              </div>
            </div>
          </div>
          <div className="card__footer">
            <Link to="/contact">
              <button className="button button--primary button--block">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

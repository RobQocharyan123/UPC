import React from "react";
import { useState } from "react";
import "./Services.css";

export const Expandable = ({ info, maxChars = 50 }) => {
  let [expanded, setExpanded] = useState(true);

  if (info.length <= maxChars) {
    return <p>{info}</p>;
  }

  let text = expanded ? info.substring(0, maxChars) : info;
  return (
    <>
      <p>{text}․․․</p>
      <button
        className="service_details"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? "Կարդալ Ավելին" : "Կարդալ Քիչ"}</span>
      </button>
    </>
  );
};

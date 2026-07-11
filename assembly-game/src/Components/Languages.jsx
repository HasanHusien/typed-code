import React from "react";
import { languages } from "../Languages";
export default function language(props) {
  let lang = languages.map((item, index) => {
    let isLost = props.wrongGuessCount > index;

    return (
      <span
        className={isLost ? "lost" : null}
        key={index}
        style={{ color: item.color, background: item.backgroundColor }}
      >
        {item.name.toUpperCase()}
      </span>
    );
  });

  return lang;
}

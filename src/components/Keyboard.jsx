import React from "react";
import clsx from "clsx";

export default function keybord(props) {
  const az = "abcdefghijklmnopqrstuvwxyz";
  const [conditions, setConditions] = React.useState({});

  React.useEffect(() => {
    setConditions({});
  }, [props.word]);

  function addGuessedLetter(letter) {
    props.setGuessing((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  function confirm(character) {
    const isRight = props.word.includes(character);
    setConditions((prev) => ({
      ...prev,
      [character]: isRight ? true : false,
    }));
  }

  let keyboard = az.split("").map((btn, index) => {
    let clx = clsx(
      conditions[btn] === true && "right",
      conditions[btn] === false && "wrong"
    );

    return (
      <button
        className={clx}
        key={index}
        disabled={props.isGameOver}
        aria-disabled={props.guessing.includes(btn)}
        aria-label={`Letter ${btn}`}
        onClick={() => {
          addGuessedLetter(btn);
          confirm(btn);
        }}
      >
        {btn.toUpperCase()}
      </button>
    );
  });
  return keyboard;
}

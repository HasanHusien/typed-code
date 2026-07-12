import { useState, useEffect } from "react";
import type { Dispatch, JSX, SetStateAction } from "react";
import clsx from "clsx";

type KeyboardProps = {
  // or use (value: string[] | ((prev: string[]) => string[])) => void
  setGuessing: Dispatch<SetStateAction<string[]>>;
  word: string;
  isGameOver: boolean;
  guessing: string[];
};

export default function Keyboard({
  word,
  setGuessing,
  isGameOver,
  guessing,
}: KeyboardProps): JSX.Element {
  //
  const az: string = "abcdefghijklmnopqrstuvwxyz";
  // or using <Record<string, boolean>>
  const [conditions, setConditions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setConditions({});
  }, [word]);

  function addGuessedLetter(letter: string) {
    setGuessing((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  function confirm(character: string) {
    const isRight = word.includes(character);
    setConditions((prev) => ({
      ...prev,
      [character]: isRight ? true : false,
    }));
  }

  const keyboard = az.split("").map((btn, index) => {
    const clx = clsx(
      conditions[btn] === true && "right",
      conditions[btn] === false && "wrong",
    );

    return (
      <button
        className={clx}
        key={index}
        disabled={isGameOver}
        aria-disabled={guessing.includes(btn)}
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
  return <>{keyboard}</>;
}

import clsx from "clsx";
import type { JSX } from "react";

type WordProps = {
  word: string;
  isGameOver: boolean;
  guessing: string;
};

function Word({ word, isGameOver, guessing }: WordProps): JSX.Element {
  const update: JSX.Element[] = word.split("").map((letter, index) => {
    const shouldBe = clsx(isGameOver && !guessing.includes(letter) && "missed");

    const condetion: boolean = isGameOver || guessing.includes(letter);
    return (
      <span key={index} className={shouldBe}>
        {condetion ? letter.toUpperCase() : null}
      </span>
    );
  });
  return <>{update}</>;
}

export default Word;

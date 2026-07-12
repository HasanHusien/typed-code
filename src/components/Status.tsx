import type { JSX } from "react";

type StatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
  wrongGuessCount: number;
};

export default function status({
  isGameWon,
  isGameLost,
  wrongGuessCount,
}: StatusProps): JSX.Element {
  const endOfGame: boolean = wrongGuessCount == 0 && !isGameWon;

  return (
    <>
      {isGameWon && (
        <section className="status">
          <h4>You Win !</h4>
          <p>🎉 Victory! You guessed it right — amazing work!</p>
        </section>
      )}
      {isGameLost && (
        <section className="status-lost">
          <h4>Game over !</h4>
          <p>💀 Oops! You ran out of guesses. Better luck next time!</p>
        </section>
      )}
      {endOfGame ? <section className="space"></section> : null}
    </>
  );
}

import { languages } from "./language";
import { getFarewellText, getRandomWord } from "./utils";
import { useState } from "react";

import Header from "./Components/Header";
import Status from "./Components/Status";
import LanguagesBoxs from "./Components/Languages";
import Word from "./Components/Word";
import Confetti from "react-confetti";
import Keyboard from "./Components/Keyboard";

function App() {
  const [word, setWord] = useState<string>((): string => getRandomWord());
  const [guessing, setGuessing] = useState<string[]>([]);

  // Drive Variables
  const wrongGuessCount: number = guessing.filter(
    (letter: string): boolean => !word.includes(letter),
  ).length;

  const isGameWon: boolean = word
    .split("")
    .every((letter: string): boolean => guessing.includes(letter));

  const isGameLost: boolean = wrongGuessCount == languages.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;

  const count: number = Math.max(0, wrongGuessCount - 1); // count++
  const allforewell: number | boolean = !isGameOver && wrongGuessCount;

  // using void for fn returned nothing
  function restGame(): void {
    setWord(getRandomWord());
    setGuessing([]);
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      {allforewell ? (
        <section className="forewell">
          {getFarewellText(languages[count].name)}
        </section>
      ) : null}
      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        wrongGuessCount={wrongGuessCount}
      />
      <section className="languages">
        <LanguagesBoxs
          wrongGuessCount={wrongGuessCount}
          setWord={setWord}
          word={word}
          isGameOver={isGameOver}
        />
      </section>
      <section className="word">
        <Word word={word} guessing={guessing} isGameOver={isGameOver} />
      </section>
      <section className="keyboard">
        <Keyboard
          word={word}
          guessing={guessing}
          setGuessing={setGuessing}
          isGameOver={isGameOver}
          isGameLost={isGameLost}
        />
      </section>
      {isGameOver && (
        <button className="new-game" onClick={restGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;

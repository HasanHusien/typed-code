import React from "react";
import Header from "./Components/Header";
import Status from "./Components/Status";
import LanguagesBoxs from "./Components/Languages";
import Word from "./Components/Word";
import Keyboard from "./Components/Keyboard";
import { languages } from "./Languages";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "react-confetti";
function App() {
  const [guessing, setGuessing] = React.useState([]);
  const [word, setWord] = React.useState(() => getRandomWord());
  function restGame() {
    setWord(getRandomWord());
    setGuessing([]);
  }
  // Drive Varabiles
  let wrongGuessCount = guessing.filter((e) => !word.includes(e)).length;
  let isGameWon = word.split("").every((letter) => guessing.includes(letter));
  let isGameLost = wrongGuessCount == languages.length - 1;
  let isGameOver = isGameWon || isGameLost;

  let count = Math.max(0, wrongGuessCount - 1); // count++
  let allforewell = !isGameOver && wrongGuessCount;

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

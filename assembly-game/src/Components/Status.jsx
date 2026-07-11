export default function status(props) {
  let one = props.isGameWon && (
    <section className="status">
      <h4>You Win !</h4>
      <p>🎉 Victory! You guessed it right — amazing work!</p>
    </section>
  );
  let two = props.isGameLost && (
    <section className="status-lost">
      <h4>Game over !</h4>
      <p>💀 Oops! You ran out of guesses. Better luck next time!</p>
    </section>
  );
  let threeCoundetion = props.wrongGuessCount == 0 && !props.isGameWon;
  let three = threeCoundetion ? <section className="space"></section> : null;
  return (
    <>
      {one}
      {two}
      {three}
    </>
  );
}

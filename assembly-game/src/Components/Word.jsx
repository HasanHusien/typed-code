import clsx from "clsx";

function Word(props) {
  let update = props.word.split("").map((letter, index) => {
    const shouldBe = clsx(
      props.isGameOver && !props.guessing.includes(letter) && "missed"
    );
    const condetion = props.isGameOver || props.guessing.includes(letter);
    return (
      <span key={index} className={shouldBe}>
        {condetion ? letter.toUpperCase() : null}
      </span>
    );
  });
  return update;
}

export default Word;

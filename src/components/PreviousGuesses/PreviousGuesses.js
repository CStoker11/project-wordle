import React from "react";

function PreviousGuesses({ guesses }) {
  console.log(guesses);
  return (
    <div>
      {guesses.map((guess) => {
        return <p>{guess.value}</p>;
      })}
    </div>
  );
}

export default PreviousGuesses;

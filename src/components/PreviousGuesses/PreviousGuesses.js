import React from "react";

function PreviousGuesses({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return <p className="guess">{guess.value}</p>;
      })}
    </div>
  );
}

export default PreviousGuesses;

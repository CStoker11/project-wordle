import React from "react";

function Guess({ guessedWord }) {
  const guessArray = [...guessedWord.toUpperCase()];
  return (
    <p className="guess">
      <span className="cell">{guessedWord ? guessArray[0] : ""}</span>
      <span className="cell">{guessedWord ? guessArray[1] : ""}</span>
      <span className="cell">{guessedWord ? guessArray[2] : ""}</span>
      <span className="cell">{guessedWord ? guessArray[3] : ""}</span>
      <span className="cell">{guessedWord ? guessArray[4] : ""}</span>
    </p>
  );
}

export default Guess;

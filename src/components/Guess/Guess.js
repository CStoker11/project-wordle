import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guessedWord }) {
  const checkedResult = checkGuess(guessedWord, answer);
  return (
    <p className="guess">
      <span className={`cell ${checkedResult?.[0]?.status ?? ""}`}>
        {checkedResult ? checkedResult[0].letter : ""}
      </span>
      <span className={`cell ${checkedResult?.[1]?.status ?? ""}`}>
        {checkedResult ? checkedResult[1].letter : ""}
      </span>
      <span className={`cell ${checkedResult?.[2]?.status ?? ""}`}>
        {checkedResult ? checkedResult[2].letter : ""}
      </span>
      <span className={`cell ${checkedResult?.[3]?.status ?? ""}`}>
        {checkedResult ? checkedResult[3].letter : ""}
      </span>
      <span className={`cell ${checkedResult?.[4]?.status ?? ""}`}>
        {checkedResult ? checkedResult[4].letter : ""}
      </span>
    </p>
  );
}

export default Guess;

import { React, useState } from "react";
import GuessBox from "../GuessBox";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import Guess from "../Guess/Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [submittedGuess, setSubmittedGuess] = useState("");
  const userWins = submittedGuess.toUpperCase() == answer;
  const userLoses =
    guesses.length === NUM_OF_GUESSES_ALLOWED &&
    submittedGuess.toUpperCase() !== answer;
  const grid = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <>
      {userWins && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong>
            <strong>{` ${guesses.length} guesses`}</strong>
          </p>
        </div>
      )}
      {userLoses && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>
          </p>
        </div>
      )}
      <div className="guess-results">
        {grid.map((guess, index) => {
          return (
            <Guess
              key={index}
              answer={answer}
              guessedWord={guesses[index]?.value || ""}
            />
          );
        })}
      </div>
      <PreviousGuesses guesses={guesses} />
      <GuessBox
        userWins={userWins}
        setSubmittedGuess={setSubmittedGuess}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default Game;

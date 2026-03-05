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
  const grid = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <>
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
      <GuessBox guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;

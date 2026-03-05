import { React, useState } from "react";
import GuessBox from "../GuessBox";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <GuessBox guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;

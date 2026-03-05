import { React, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessBox({ userWins, setSubmittedGuess, guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length != 5) {
      setGuess("");
      return;
    }
    const newGuess = { value: guess, id: crypto.randomUUID() };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setGuess("");
    setSubmittedGuess(newGuess.value);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter Guess: </label>
      <input
        id="guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
        disabled={guesses.length == NUM_OF_GUESSES_ALLOWED || userWins}
      />
    </form>
  );
}

export default GuessBox;

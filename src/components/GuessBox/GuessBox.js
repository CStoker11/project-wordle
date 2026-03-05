import { React, useState } from "react";

function GuessBox({ guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuess = { value: guess, id: crypto.randomUUID() };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    console.log(newGuess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter Guess: </label>
      <input
        id="guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
    </form>
  );
}

export default GuessBox;

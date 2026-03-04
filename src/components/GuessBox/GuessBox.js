import { React, useState } from "react";

function GuessBox() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    console.log(guesses);
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
      ></input>
    </form>
  );
}

export default GuessBox;

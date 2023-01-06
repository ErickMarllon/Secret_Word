// Importando Estilização
import { AppStyle } from "./AppStyle";
// Fim import Estilização

// Import Hooks
import React, { useCallback, useEffect, useState } from "react";
// Fim import Hooks

// Import Data
import { wordsList, stages } from "./components/data/Data";
// Fim import Data

// Import components
import Start from "./components/start/Start";
import Game from "./components/game/Game";
import GameOver from "./components/gameOver/GameOver";
// Fim import Components
const gessesQty = 3;
const scoreIncrement = 100;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(gessesQty);
  const [score, setScore] = useState(0);


  const pickedWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }, [words]);

  // starts the secret word game
  const startGame = useCallback(() => {
    ClearLetterStates();
    // pick word and pick category
    const { word, category } = pickedWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickedWordAndCategory]);
  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // push guessed letter or remove a guess/letter
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuessed) => actualGuessed - 1);
    }
  };
  const ClearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states

      ClearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    // win condition
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      // add score
      setScore((actualScore) => (actualScore += scoreIncrement));

      //restart game with new word
      startGame();
    }
  }, [letters, guessedLetters, startGame, gameStage]);

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(gessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <AppStyle>
      {gameStage === "start" && <Start startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}

        />
      )}
      {gameStage === "gameOver" && <GameOver score={score} retry={retry} />}
    </AppStyle>
  );
}

export default App;

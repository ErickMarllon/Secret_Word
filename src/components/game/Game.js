import { useState, useRef } from "react";
import { Button } from "../../AppStyle";
import {
  H1,
  Tip,
  WrongLettersContainer,
  WordContainer,
  Container,
  Points,
  ChosenLetter,
  BlankSquare,
  LetterContainer,
} from "./Style";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };
  return (
    <Container>
      <Points className="points">
        <span>Pontuação: {score}</span>
      </Points>
      <H1>Adivinhe a palavra:</H1>
      <Tip>
        Dicas sobre a palavra: <span>{pickedCategory}</span>
      </Tip>
      <p>Voce ainda tem {guesses} tentativa(s).</p>
      <WordContainer>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <ChosenLetter key={i}>{letter}</ChosenLetter>
          ) : (
            <BlankSquare key={i}/>
          )
        )}
      </WordContainer>
      <LetterContainer>
        <p>Tente adivinhar a letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <Button type="submit">jogar!</Button>
        </form>
      </LetterContainer>

      <WrongLettersContainer>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{`${letter},`}</span>
        ))}
      </WrongLettersContainer>
      {/* <Button onClick={verifyLetter}>Finalizar jogo</Button> */}
    </Container>
  );
};

export default Game;

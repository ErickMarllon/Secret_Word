
import { Button } from "../../AppStyle";
import { H1, P, Container } from "./Style";

const GameOver = ({retry,score}) => {
  return (
    <Container>
      <H1>Fim de jogo!</H1>
      <P>A sua pontuação foi: <span>{score}</span></P>
      <Button onClick={retry}>resetar o jogo</Button>
    </Container>
  );
};

export default GameOver;

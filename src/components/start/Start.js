import { Button } from "../../AppStyle";
import { H1, P, Container } from "./Style";

const Start = ({ startGame }) => {
  return (
    <Container>
      <H1>Secret Word</H1>
      <P>Clique no botão abaixo para começar a jogar!</P>
      <Button onClick={startGame}>Começar o Jogo</Button>
    </Container>
  );
};

export default Start;

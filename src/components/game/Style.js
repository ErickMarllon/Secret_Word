import styled from "styled-components";

export const Container = styled.div`
margin-top: 2em;
`
export const H1 = styled.h1`
  font-size: 2.5em;
`;
export const Points = styled.p`
  font-weight: bold;
`;
export const Record = styled.p`
  font-weight: bold;
`;
export const Tip = styled.h3`
  color: #ecfa00;
`;
export const WordContainer = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;
`;

export const ChosenLetter = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  width: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;
export const BlankSquare = styled.span`
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  width: 100px;
  height: 111px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;
export const LetterContainer = styled.div`
  margin-bottom: 1.2em;
  form {
    display: flex;
    margin-top: 1.2em;
    align-items: center;
    justify-content: center;
  }
  input {
    height: 50px;
    width: 50px;
    font-size: 2em;
    text-align: center;
    margin-right: 1em;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
export const WrongLettersContainer = styled.div`
  margin-bottom: 2rem;

  span {
    padding: 3px;
    color: #ecfa00;
    text-transform: uppercase;
  }
`;


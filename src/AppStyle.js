import styled from "styled-components";

export const AppStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Button = styled.button`
  background-color: #0923af;
  color: #fff;
  padding: 0px 45px;
  border: 2px solid #fff;
  border-radius: 25px;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    background-color: #1646a0;
  }
`;

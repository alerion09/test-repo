import React from 'react';
import styled from 'styled-components';

const App = () => {

  interface StyledButtonProps {
    dark?: boolean;
  }
  const Button = styled.button<StyledButtonProps>`
    background-color: tomato;
    border: none;
    min-width: 150px;
    color: white;
    padding:5px;
    font-size: 1.6rem;
    margin:10px;
    border-radius:4px;
    ${props => props.dark && `
    background-color: black;
    `}
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:10vh;
  `;
  return (
      <Container>
        <Button>Click!</Button>
        <Button dark>Click!</Button>
      </Container>
  );
}

export default App;

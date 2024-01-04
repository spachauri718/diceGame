import React from 'react'
import styled from 'styled-components';
import { Button } from "../Button.js";

function StartGame({toggle}) {
  return (  
    <Container>
      <div>
        <img 
                src="data:image/jpeg;base64,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" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
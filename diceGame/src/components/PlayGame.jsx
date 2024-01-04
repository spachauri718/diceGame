import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import styled from 'styled-components';

function PlayGame() {
  const [score, setScore] = useState(0);
  const [dice, setDice] = useState(1);
  const [selectedNumber, setselectedNumber] = useState();
  const [error, setError] = useState();

  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }
    const randomnumber = Math.floor(Math.random() * 6 + 1);
    setDice((prev) => randomnumber);
    console.log(randomnumber);
    console.log(selectedNumber);

    if (selectedNumber === randomnumber) {
      setScore((prev) => prev + randomnumber);
    } else {
      setScore((prev) => prev - 0.5);
    }
    setselectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector setselectedNumber={setselectedNumber} selectedNumber={selectedNumber} />
      </div>
      <Instructions>
        If you guess right, you will get the point. If you don't, the score will be deducted by 0.5.
      </Instructions>
      <RoleDice roleDice={roleDice} dice={dice} setDice={setDice} />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  padding-top: 70px;
  background-color: #151a31;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .top_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    .top_section {
      flex-direction: column;
  
      align-items: center;
    }
  }
`;

const Instructions = styled.h2`
  margin: 20px;
  max-width: 600px;
  text-align: center;
`;

export default PlayGame;

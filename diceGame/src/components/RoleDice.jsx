import React from "react";
import styled from "styled-components";
import { useState } from "react";

function RoleDice({roleDice ,dice}) {


  
  return (
    <DiceContainer>
      <div
        className="dice"
        onClick={roleDice}
      >
        <img

          src={`https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-${dice}.svg`}
          alt=""
        />
      </div>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
  }
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setselectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setselectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid #fff;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#4CAF50" : "#fff")};
  color: ${(props) => (!props.isSelected ? "#4CAF50" : "#fff")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#4CAF50" : "#ddd")};
    color: ${(props) => (!props.isSelected ? "#4CAF50" : "#000")};
  }
  
  @media screen and (max-width: 600px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }
`;

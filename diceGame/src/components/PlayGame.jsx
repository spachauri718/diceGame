import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

function PlayGame() {
  return (
    <MainContainer >
            <div className = "top-container">
            <TotalScore />
            <NumberSelector />
            </div>

            <RoleDice />
    </MainContainer>
  )
}
export default PlayGame

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

`
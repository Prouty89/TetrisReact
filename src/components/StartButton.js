import React from 'react';
import { StyledStartButton } from './StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}> StartButton </StyledStartButton>
)

export default StartButton;
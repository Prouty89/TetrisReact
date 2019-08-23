import React from 'react';
import { StyledCell } from './StyledCell';
import { TETROMINOS } from '../tetrominos';


const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerendered cell')}
  </StyledCell>
);

export default React.memo(Cell);
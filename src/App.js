import React from 'react';
import Tetris from './components/Tetris'
import './App.css'

const App = () => (
  <div className = "App">
    <Tetris />
    <p className = "finstructions">
      Press Start Game to begin a new game. Use arrow keys "&#8593;" to rotate Tetromino, "&#8592;"  +  "&#8594;" arrows to move from left to right, and &#8595; to toggle the falling speed. 
    </p>
  </div>
)

export default App;
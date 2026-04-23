import Board from './components/Board';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const winnerCells = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows check
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns check
    [0, 4, 8], [2, 4, 6] // diagonals check
  ];

  return (
    <div className='game-container'>
      <h1>Welcome to Tic-Tac-Toe Game</h1>
      <Board
        boardState={boardState}
        setBoardState={setBoardState}
        winnerCells={winnerCells}
      />
    </div>
  );
};

export default App;

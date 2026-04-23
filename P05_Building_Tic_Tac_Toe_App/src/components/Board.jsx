import { useState } from 'react';
import Cell from './Cell';

const Board = ({ boardState, setBoardState, winnerCells }) => {
    const [isXTurn, setIsXTurn] = useState(true);

    const computeWinner = (board) => {
        for (const cell of winnerCells) {
            if (board[cell[0]] &&
                board[cell[0]] === board[cell[1]] &&
                board[cell[0]] === board[cell[2]]) {
                return board[cell[0]];
            }
        }
        return null;
    };

    const checkIfMatchDrawn = (board, winner) => {
        return winner === null && board.every((cell) => cell !== null);
    };

    let winner = computeWinner(boardState);

    const isMatchDrawn = checkIfMatchDrawn(boardState, winner);

    const cellClick = (index) => {
        const copiedBoardState = [...boardState];
        if (copiedBoardState[index] !== null) {
            return;
        }
        copiedBoardState[index] = isXTurn ? 'X' : 'O';
        setBoardState(copiedBoardState);
        setIsXTurn(!isXTurn);
    };

    const boardRowStyle = (winner) => {
        return {
            pointerEvents: (winner !== null || isMatchDrawn) ? 'none' : 'auto',
            backgroundColor: (winner !== null || isMatchDrawn) ? 'gray' : 'white',
            cursor: 'pointer'
        };
    };

    const onBoardReset = () => {
        setBoardState(Array(9).fill(null));
        winner = null;
        setIsXTurn(true);
    };

    return (
        <div className='board'>
            {
                winner || isMatchDrawn ?
                    <div className='board-action'>
                        {
                            isMatchDrawn ?
                                <div className='board-turn'>Match has been drawn!</div> :
                                <div className='board-turn'>Player {winner} won the Game!</div>
                        }
                        <button className='btnReset' onClick={onBoardReset}>Play Again!</button>
                    </div> :
                    <div className='board-turn'>
                        Player Turn : Player {isXTurn ? 'X' : 'O'} proceed with your turn!
                    </div>
            }
            <div style={boardRowStyle(winner)}>
                <div className='board-row'>
                    {
                        [0, 1, 2].map((idx) => (
                            <Cell key={idx}
                                index={idx}
                                cellClick={() => cellClick(idx)}
                                value={boardState[idx]}
                            />
                        ))
                    }
                </div>
                <div className='board-row'>
                    {
                        [3, 4, 5].map((idx) => (
                            <Cell key={idx}
                                index={idx}
                                cellClick={() => cellClick(idx)}
                                value={boardState[idx]}
                            />
                        ))
                    }
                </div>
                <div className='board-row'>
                    {
                        [6, 7, 8].map((idx) => (
                            <Cell key={idx}
                                index={idx}
                                cellClick={() => cellClick(idx)}
                                value={boardState[idx]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Board;

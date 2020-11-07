import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { playerContext, gridContext } from './Context';

export default function Square({ index }) {
    const [player, setPlayer] = useContext(playerContext);
    const [grid, setGrid] = useContext(gridContext);

    const styles = {
        backgroundColor: '#fff',
        border: '1px solid black',
        height: '100px',
        width: '100px',
        fontFamily: 'Itim',
        outlineStyle: 'none',
    };

    function calculateWinner(grid) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (
                grid[a] === undefined ||
                grid[b] === undefined ||
                grid[c] === undefined
            ) {
                return;
            }

            if (
                grid[a] === grid[b] &&
                grid[b] === grid[c] &&
                grid[a] === grid[c]
            ) {
                return grid[a];
            }
        }
    }

    return (
        <div>
            <div>
                <button
                    style={styles}
                    onClick={() => {
                        if (grid[index] === 'X' || grid[index] === '0') {
                            return;
                        }

                        const tempArray = [...grid];

                        player === 'X'
                            ? (tempArray[index] = 'X')
                            : (tempArray[index] = '0');

                        setGrid(() => tempArray);

                        const test = calculateWinner(tempArray);

                        if (test === 'X' || test === '0') {
                            toast.success(`${player} Has Won!`, {
                                position: 'top-right',
                                toastId: 'winner',
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        } else {
                            player === 'X'
                                ? setPlayer(() => '0')
                                : setPlayer(() => 'X');
                        }
                    }}
                >
                    {grid[index] !== undefined && <p>{grid[index]}</p>}
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

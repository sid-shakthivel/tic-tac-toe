import React, { useState } from 'react';

import Game from './Game';

import { playerContext, gridContext } from './Context';

function App() {
    const [turn, changeTurn] = useState(() => 'X');
    const [grid, changeGrid] = useState(() => [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
    ]);

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    };

    return (
        <playerContext.Provider value={[turn, changeTurn]}>
            <gridContext.Provider value={[grid, changeGrid]}>
                <div style={styles}>
                    <Game />
                </div>
            </gridContext.Provider>
        </playerContext.Provider>
    );
}

export default App;

import React, { useContext, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Square from './Square';

import { gridContext, playerContext } from './Context';

export default function Game() {
    const [grid] = useContext(gridContext);
    const [player] = useContext(playerContext);

    const styles = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateColumns: 'repeat(3, 100px)',
    };

    useEffect(() => {
        toast.dark(`${player}'s turn`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }, [player]);

    return (
        <>
            <div style={styles}>
                {grid.map((element, index) => (
                    <Square key={index} index={index} />
                ))}
            </div>
            <ToastContainer />
        </>
    );
}

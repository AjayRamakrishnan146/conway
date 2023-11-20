import React, { useState, useEffect } from 'react';
import Header from './Header';
import GameLogic from './GameLogic';
import RulesModal from './RulesModal';


//Defining the functional component GridFormat
const GridFormat = () => {
    // Setting the number of rows in the grid
    const nRows = 20;
    // Setting the number of columns in the grid
    const nCols = 50;
    // Initializing state for the grid using the useState hook
    const [grid, setGrid] = useState(() => {
        const arr = [];
        for (let i = 0; i < nRows; i++) {
             // Creating each row as an array with nCols columns, all initialized to 0, and pushing it into the 'arr' array
            arr.push(Array.from(Array(nCols), () => 0));
        }
        return arr;
    });

    const [playing, setPlaying] = useState(false); // Initializing state for the game playing status
    const [clickedButton, setClickedButton] = useState(null); // Initializing state for the last clicked button
    const [showModal, setShowModal] = useState(false); // Initializing state for the visibility of the RULES modal
    const [resetClicked, setResetClicked] = useState(false);  // Initializing state for the RESET button click status
    const [rulesClicked, setRulesClicked] = useState(false); // Initializing state for the RULES button click status

    // Defining a function to handle the start button click event
    const clickStart = () => {
        setPlaying(true);
        setClickedButton('start');
    };

    // Defining a function to handle the stop button click event
    const clickStop = () => {
        setPlaying(false);
        setClickedButton('stop');
    };

   
    // Defining a function to handle the rules button click event
    const clickRules = () => {
        setClickedButton('rules');
        setRulesClicked(true);
        setShowModal(true);

    };

    // Defining a function to handle the reset button click event
    const clickReset = () => {
        setResetClicked(true);
        // Create a new grid with all values set to 0
        const newGrid = [];
        for (let i = 0; i < nRows; i++) {
            newGrid.push(Array.from(Array(nCols), () => 0));
        }
        // Update the state with the new grid, set the game to a non-playing state, and mark the clicked button as "reset"
        setGrid(newGrid);
        setPlaying(false);
        setClickedButton('reset');
        // Set a timeout to reset the clicked state after 500 milliseconds
        const timeout = setTimeout(() => {
            setResetClicked(false);
        }, 500);

        // Clear the timeout when the component unmounts or when the "RESET" button is clicked again
        return () => clearTimeout(timeout);
    };

     // Defining a function to handle cell click events
    const cellClick = (i, j) => {
        if (!playing) {
            const newGrid = [...grid];
            newGrid[i][j] = grid[i][j] ? 0 : 1;
            // Toggle the value of the clicked cell (0 to 1 or 1 to 0)
            setGrid(newGrid);
        }
    };

    // Defining a function to close the rules modal
    const closeModal = () => {
        setShowModal(false);
        setRulesClicked(false);
    };

    return (
        <div>
            {/* Outermost container */}
            <div style={{ backgroundColor: 'sandybrown' }}>
                {/* Header component */}
                <Header />
                {/* GameLogic component */}
                <GameLogic grid={grid} setGrid={setGrid} running={playing} numRows={nRows} numCols={nCols} />
                {/* Container for the grid */}
                <div className="container my-0">
                    <div className="row g-0">
                        <div
                            className="col col-12"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${nCols}, minmax(0, 1fr))`,
                                gap: '1px',
                                border: '7px solid black',
                            }}
                        >
                            {/* Mapping to render grid cells */}
                            {grid.map((arr, i) =>
                                arr.map((col, j) => (
                                    <div
                                        key={`${i}-${j}`}
                                        onClick={() => cellClick(i, j)}
                                        style={{ width: '100%', paddingTop: '100%', position: 'relative' }}
                                        data-testid={`grid-cell-${i}-${j}`} 
                                    >
                                        {/* Inner div for cell appearance */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                border: '1px solid black',
                                                backgroundColor: grid[i][j] ? 'red' : 'azure',
                                                pointerEvents: playing ? 'none' : 'auto',
                                            }}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                        {/* Buttons container */}
                        <div
                            className="col col-6 text-center mt-2 mb-3 p-2 mx-auto"
                            style={{
                                backgroundColor: 'beige',
                                borderRadius: '30px',
                                fontFamily: 'cursive',
                                border: '5px solid black',
                            }}
                        >
                             {/* START button/STOP button */}
                            <div className="d-flex flex-wrap justify-content-center">
                                <button
                                    style={{ border: '1px solid black', width: '80px' }}
                                    type="button"
                                    className={`btn ${playing ? 'btn-danger' : 'btn-light'} m-2 p-2`}
                                    onClick={playing ? clickStop : clickStart}
                                >
                                    {playing ? 'STOP' : 'START'}
                                </button>
                                {/* RESET button */}
                                <button
                                    type="button"
                                    style={{ border: '1px solid black',width: '80px' }}
                                    className={`btn ${resetClicked ? 'btn-danger' : 'btn-light'} m-2 p-2`}
                                    onClick={clickReset}
                                >
                                    RESET
                                </button>
                                {/* RULES button */}
                                <button
                                    style={{ border: '1px solid black',width: '80px' }}
                                    type="button"
                                    className={`btn ${rulesClicked ? 'btn-danger' : 'btn-light'} m-2 p-2`}
                                    onClick={clickRules}
                                >
                                    RULES
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Modal and Footer */}
                {/* Rules modal */}
                <RulesModal showModal={showModal} closeModal={closeModal} />
                {/* Footer */}
                <footer className="text-center py-3" style={{ backgroundColor: 'mediumaquamarine', fontFamily: 'cursive', fontWeight: 'bold', fontSize: '23px', animation: 'blinking 1s infinite' }}>
                    Thank you for playing Conway's Game of Life
                </footer>
            </div>
        </div>
    );
};


export default GridFormat;

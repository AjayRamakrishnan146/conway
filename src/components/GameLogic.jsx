import React, { useEffect } from 'react';

// GameLogic component receives grid state, setGrid function, running state, numRows, and numCols as props
const GameLogic = ({ grid, setGrid, running, numRows, numCols }) => {
  // Function to count live neighbors for a given cell
  const countLiveNeighbors = (currentGrid, row, col) => {
    let liveNeighborCount = 0;
    // Looping through neighboring cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // Skip the current cell
        if (i === 0 && j === 0) continue;
        // Calculating the row index of the neighboring cell by adding the loop counter (i) to the current row index
        const r = row + i;
        // Calculating the column index of the neighboring cell by adding the loop counter (j) to the current column index
        const c = col + j; 
        // Check if neighbor is within grid boundaries and is alive
        if (r >= 0 && r < numRows && c >= 0 && c < numCols && currentGrid[r][c] === 1) {
          liveNeighborCount = liveNeighborCount + 1;
        }
      }
    }
    // Return the count of live neighbors
    return liveNeighborCount;
  };

  // Function to update the grid based on Conway's Game of Life rules
  const updateGrid = () => {
    // If the game is not running, do nothing
    if (!running) return;
    // Create a new grid to update
    const newGrid = [];
    for (let i = 0; i < numRows; i++) {
      // Initialize an empty array for the current row (i) in the newGrid array
      newGrid[i] = [];
      for (let j = 0; j < numCols; j++) {
        // Count live neighbors for each cell
        const liveNeighbors = countLiveNeighbors(grid, i, j);
        // Apply Conway's Game of Life rules
        if (grid[i][j] === 1) {
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            // Cell dies due to underpopulation or overpopulation
            newGrid[i][j] = 0;
          } else {
            // Cell survives
            newGrid[i][j] = 1;
          }
        } else {
          if (liveNeighbors === 3) {
            // Cell becomes alive due to reproduction
            newGrid[i][j] = 1;
          } else {
            // Cell remains dead
            newGrid[i][j] = 0;
          }
        }
      }
    }
    // Update the grid with the new state
    setGrid(newGrid);
  };

  // Use useEffect to set up an interval for grid updates
  useEffect(() => {
    // Set the interval duration (milliseconds)
    const intervalDuration = 200;
    // Create an interval to call the updateGrid function
    const interval = setInterval(updateGrid, intervalDuration);
    // Clean up the interval when the component is unmounted or dependencies change
    return () => clearInterval(interval);
  }, [running, grid, setGrid, numRows, numCols]);
  
  // Return a placeholder element with a data-testid for testing
  return <div data-testid="your-actual-test-id"></div>;
};


export default GameLogic;

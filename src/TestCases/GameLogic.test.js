import React from 'react';
import { render, screen } from '@testing-library/react';

// Import the component (GameLogic) to be tested
import GameLogic from '../components/GameLogic';

// Describing a test suite for the GameLogic component
describe('GameLogic', () => {
  
// Test: Ensure that the GameLogic component renders without crashing
  it('renders without crashing', () => {
    // Render the GameLogic component with initial props
    render(<GameLogic grid={[]} numRows={0} numCols={0} running={false} setGrid={() => {}} />);
  });


// Test: Update the grid based on the game logic - underpopulation
  it('updates the grid based on the game logic - underpopulation', async () => {
    // Defining initial grid configuration
    const numRows = 3;
    const numCols = 3;
    const initialGrid = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    // Creating a mock function for setGrid
    let setGridMock = jest.fn();

    // Rendering the GameLogic component with initial props and mock function
    render(<GameLogic grid={initialGrid} numRows={numRows} numCols={numCols} running={true} setGrid={setGridMock} />);

    // Allowing time for the grid to update (async operation)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // After one iteration, the center cell should die due to underpopulation
    const updatedGrid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    // Selecting an element from the rendered component for testing
    const gridElement = screen.getByTestId('your-actual-test-id'); 

    // Asserting that setGridMock has been called with the expected updatedGrid
    expect(setGridMock).toHaveBeenCalledWith(updatedGrid);
  });



// Test: Update the grid based on the game logic - survival
  it('updates the grid based on the game logic - survival', async () => {
    // Defining initial grid configuration
    const numRows = 3;
    const numCols = 3;
    const initialGrid = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    // Creating a mock function for setGrid
    let setGridMock = jest.fn();

    // Rendering the GameLogic component with initial props and mock function
    render(<GameLogic grid={initialGrid} numRows={numRows} numCols={numCols} running={true} setGrid={setGridMock} />);

    // Allowing time for the grid to update (async operation)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // After one iteration, the cells in the center and top-left should survive
    const updatedGrid = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];

    // Selecting an element from the rendered component for testing
    const gridElement = screen.getByTestId('your-actual-test-id');

    // Asserting that setGridMock has been called with the expected updatedGrid
    expect(setGridMock).toHaveBeenCalledWith(updatedGrid);
  });



// Test: Updating the grid based on the game logic - overpopulation
  it('updates the grid based on the game logic - overpopulation', async () => {
    // Defining initial grid configuration
    const numRows = 3;
    const numCols = 3;
    const initialGrid = [
      [1, 1, 1],
      [1, 1, 1],
      [0, 0, 0],
    ];

    // Creating a mock function for setGrid
    let setGridMock = jest.fn();

    // Rendering the GameLogic component with initial props and mock function
    render(<GameLogic grid={initialGrid} numRows={numRows} numCols={numCols} running={true} setGrid={setGridMock} />);

    // Allowing time for the grid to update (async operation)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // After one iteration, the cells in the center and top-left should die due to overpopulation
    const updatedGrid = [
      [1, 0, 1],
      [1, 0, 1],
      [0, 1, 0],
    ];

    // Selecting an element from the rendered component for testing
    const gridElement = screen.getByTestId('your-actual-test-id'); 


    // Asserting that setGridMock has been called with the expected updatedGrid
    expect(setGridMock).toHaveBeenCalledWith(updatedGrid);
  });



// Test: Update the grid based on the game logic - reproduction
  it('updates the grid based on the game logic - reproduction', async () => {
    // Defining initial grid configuration
    const numRows = 3;
    const numCols = 3;
    const initialGrid = [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0],
    ];

    // Creating a mock function for setGrid
    let setGridMock = jest.fn();

    // Rendering the GameLogic component with initial props and mock function
    render(<GameLogic grid={initialGrid} numRows={numRows} numCols={numCols} running={true} setGrid={setGridMock} />);

    // Allowing time for the grid to update (async operation)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // After one iteration, a new cell should be born in the center
    const updatedGrid = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    // Selecting an element from the rendered component for testing
    const gridElement = screen.getByTestId('your-actual-test-id'); 


    // Asserting that setGridMock has been called with the expected updatedGrid
    expect(setGridMock).toHaveBeenCalledWith(updatedGrid);
  });
});

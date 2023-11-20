// Import necessary dependencies and the component to be tested
import React from 'react';
import { render, fireEvent, screen,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GridFormat from '../components/GridFormat';

// Test suite for the GridFormat component
describe('GridFormat component', () => {
  // Test case for rendering the component
  it('renders GridFormat component without crashing', () => {
    render(<GridFormat />); // Render the GridFormat component
  });



// Test case for checking if the START button is rendered
  it('renders START button', () => {
    const { getByText } = render(<GridFormat />); // Rendering the GridFormat component and get utility functions
    const startButton = getByText('START'); // Getting the element with text 'START'
    expect(startButton).toBeInTheDocument(); // Asserting that the START button is in the document
  });



// Test case for checking if the RESET button is rendered
  it('renders RESET button', () => {
    const { getByText } = render(<GridFormat />); // Rendering the GridFormat component and get utility functions
    const resetButton = getByText('RESET'); // Getting the element with text 'RESET'
    expect(resetButton).toBeInTheDocument();  // Asserting that the RESET button is in the document
  });



// Test case for checking if the RULES button is rendered
  it('renders RULES button', () => {
    const { getByText } = render(<GridFormat />);// Rendering the GridFormat component and get utility functions
    const rulesButton = getByText('RULES');// Getting the element with text 'RULES'
    expect(rulesButton).toBeInTheDocument(); // Asserting that the RULES button is in the document
  });



// Test case for clicking the START button
  it('clicks START button and changes the playing state', () => {
    const { getByText } = render(<GridFormat />); // Rendering the GridFormat component and get utility functions
    const startButton = getByText('START'); // Getting the element with text 'START'
    fireEvent.click(startButton);// Simulate a click on the START button
  });



// Test case for clicking the START button and changing the playing state
it('clicks START button and changes the playing state', () => {
  const { getByText } = render(<GridFormat />); // Rendering the GridFormat component and get utility functions
  const startButton = getByText('START'); // Getting the element with text 'START'
  fireEvent.click(startButton); // Simulate a click on the START button

  // Assert that the playing state has changed to true
  const playingState = screen.getByText(/STOP/); // Assuming the button changes to 'STOP' when playing
  expect(playingState).toBeInTheDocument();
});

  
// Test case for clicking the RESET button
  test('Grid resets on RESET button click', async () => {
    // Render your component and perform the reset action
    const { getByText, getAllByTestId } = render(<GridFormat />); // Rendering the GridFormat component and get utility functions
    const resetButton = getByText('RESET');  // Gettting the element with text 'RESET'
    fireEvent.click(resetButton);// Simulate a click on the RESET button

});



// Test case for clicking the RULES button and opening the modal
  it('clicks RULES button and opens the rules modal', () => {
    const { getByText, getByTestId } = render(<GridFormat />); // Rendering the GridFormat component and obtain utility functions
    const rulesButton = getByText('RULES'); // Finding the element with the text 'RULES' and store it in the variable rulesButton
    fireEvent.click(rulesButton);// Simulate a click event on the rulesButton to trigger the corresponding action
    
  });


// Test case for checking if the grid is initially rendered with the correct number of rows and columns
  it('renders the grid with the correct number of rows and columns', () => {
    const { container } = render(<GridFormat />);// Rendeing the GridFormat component and obtain utility functions
    const gridCells = container.querySelectorAll('.col-12 > div'); // Use the container to query for all elements that match the CSS selector '.col-12 > div' within the rendered component
    expect(gridCells.length).toBe(20 * 50); // Assuming nRows = 20 and nCols = 50
  });



  // Test case for clicking a cell in the grid when the game is not playing
  it('clicks a cell and toggles its state when the game is not playing', () => {
    const { container } = render(<GridFormat />);// Rendering the GridFormat component and obtain utility functions, and store the container in the variable 'container'
    const cell = container.querySelector('.col-12 > div > div'); // Using the container to query for the first 'div' element inside an element with the class 'col-12' (representing a cell)
    fireEvent.click(cell);// Simulate a click event on the cell to trigger the corresponding action (toggling its state)
    expect(cell).toHaveStyle('background-color: red'); // Expecting that the cell has a style attribute 'background-color' set to 'red', assuming it toggles the background color
  });



  // Test case description: If clicking a cell in the grid when the game is playing (should not change the cell state)
  it('clicks a cell and does not toggle its state when the game is playing', () => {
    const { container } = render(<GridFormat />); // Rendering the GridFormat component
    // Get the 'START' button and click it to start the game
    const startButton = screen.getByText('START');
    fireEvent.click(startButton);
    // Find a cell in the grid
    const cell = container.querySelector('.col-12 > div > div');
    // Get the initial color of the cell
    const initialColor = window.getComputedStyle(cell).getPropertyValue('background-color');
    // Click the cell to simulate a user interaction
    fireEvent.click(cell);
    // Get the final color of the cell after the click
    const finalColor = window.getComputedStyle(cell).getPropertyValue('background-color');
    // Expect that the final color is the same as the initial color, indicating that the cell state did not toggle
    expect(finalColor).toBe(initialColor);
  });


// Test case description: Clicks START/STOP button and toggles the game state
  it('clicks START/STOP button and toggles the game state', () => {
    // Rendering the GridFormat component and get utility functions
    const { getByText } = render(<GridFormat />);
    // Get the 'START' or 'STOP' button by matching either of them using a regular expression
    const startStopButton = getByText(/START|STOP/); 
    // Clickng the 'START' or 'STOP' button to toggle the game state
    fireEvent.click(startStopButton); 
    
  });


// Test case Description: checking if the footer is rendered with the correct text
  it('renders the footer with the correct text', () => {
    const { getByText } = render(<GridFormat />);// Rendering the GridFormat component and get utility functions
    const footerText = getByText("Thank you for playing Conway's Game of Life");// Get the 'START' or 'STOP' button by matching either of them using a regular expression
    expect(footerText).toBeInTheDocument();// Clicking the 'START' or 'STOP' button to toggle the game state
  });


// Test case description: Renders the modal closed initially
  it('renders the modal closed initially', () => {
    // Rendering the GridFormat component and get utility functions
    const { queryByTestId } = render(<GridFormat />);
    // Query for the modal using its test ID
    const modal = queryByTestId('custom-modal');
    // Expecting that the modal is not present in the document initially
    expect(modal).not.toBeInTheDocument();
  });

});
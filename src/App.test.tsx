import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Player from './Player';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the correct name for player', () => {
  render(<Player
    name="Tom Brady"
    starting={true}
    position="quarterback"
    onDelete={() => console.log('Test')} />
  ); // setup up our component

  const nameHeading = screen.getByRole('heading', { name: "Tom Brady" }); // get the value
  expect(nameHeading).toBeInTheDocument(); // check the value
});

test('does not render the incorrect name for player', () => {
  render(<Player
    name="BJ Clark"
    starting={true}
    position="quarterback"
    onDelete={() => console.log('Test')} />
  ); // setup up our component

  // querybyrole returns null if it doesn't exist
  // getbyrole fails if it does not exist
  const nameHeading = screen.queryByRole('heading', { name: "Tom Brady" }); // get the value
  expect(nameHeading).not.toBeInTheDocument(); // check the value
});

test('clicking benchPlayer changes text to Not Starting', () => {
  render(<Player
    name="BJ Clark"
    starting={true}
    position="quarterback"
    onDelete={() => console.log('Test')} />
  ); // setup up our component

  // get the button 
  const button = screen.getByRole('button', { name: 'Bench Player' })

  // click the button 
  fireEvent.click(button);

  // check the text
  const notStart = screen.getByText(/not starting/i);
  expect(notStart).toBeInTheDocument();
});

test('clicking benchPlayer twice changes text to Starting', () => {
  render(<Player
    name="BJ Clark"
    starting={true}
    position="quarterback"
    onDelete={() => console.log('Test')} />
  ); // setup up our component

  // get the button 
  const button = screen.getByRole('button', { name: 'Bench Player' })

  // click the button 
  fireEvent.click(button);
  fireEvent.click(button);

  // check the text
  const notStart = screen.getByText(/starting/i);
  expect(notStart).toBeInTheDocument();
});
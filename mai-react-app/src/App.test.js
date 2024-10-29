import { render, screen } from '@testing-library/react';
import App from './App';
import GameLogic from './GameLogic';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameLogic with title and description', () => {
  const title = "Test Title";
  const description = "This is a test description.";

  render(<GameLogic title={title} description={description} />);

  const titleElement = screen.getByText(title);
  const descriptionElement = screen.getByText(description);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
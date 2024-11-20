// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter'
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMssg = screen.getByText(/^[0-9]+$/)
  expect(countMssg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterE = screen.getByText('0');
  expect(counterE).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('+');

  fireEvent.click(increment);
  expect(screen.getByText('1')).toBeInTheDocument();

  fireEvent.click(increment);
  expect(screen.getByText('2')).toBeInTheDocument();


});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  
  fireEvent.click(decrementButton);
  expect(screen.getByText('-1')).toBeInTheDocument();
  
  fireEvent.click(decrementButton);
  expect(screen.getByText('-2')).toBeInTheDocument();
});

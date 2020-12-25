import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders shared component package', () => {
  render(<App />);
  const textElement = screen.getByText('Shared component package');
  expect(textElement).toBeInTheDocument();
});

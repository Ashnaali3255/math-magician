import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';
import '@testing-library/jest-dom';

// This test checks if the calculator renders in the DOM
it('check if the Calculator renders properly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Check if buttons are rendered in the DOM', () => {
  render(<Calculator />);
  expect(screen.getByText('AC')).toBeInTheDocument();
  expect(screen.getByText('9')).toBeInTheDocument();
});

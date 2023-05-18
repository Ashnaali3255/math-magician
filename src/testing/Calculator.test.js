import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';
// This test checks if the calculator renders in the DOM
it('check if the Calculator renders properly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

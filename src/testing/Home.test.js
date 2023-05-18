import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Components/home';

// This test checks if the Home component is properly rendered in the DOM
it('check if the Home section renders properly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

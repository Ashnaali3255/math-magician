import React from 'react';
import renderer from 'react-test-renderer';

// This test fole checks if the Navigation is properly rendered on the DOM
it('check if the Navbar section renders properly', () => {
  const tree = renderer.create(<nav />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
it('check if the Navbar section renders properly', () => {
const tree = renderer.create(<nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Components/home';

it('check if the Home section renders properly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

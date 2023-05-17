import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Components/quote';

it('check if the Quote section renders properly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});

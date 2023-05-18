//This test checks if the calculator renders in the DOM
it('check if the Calculator renders properly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});


import 'react-native';
import React from 'react';
import { Button, ButtonText } from '../basic/button';
import renderer from 'react-test-renderer';

describe('Button snapshot', () => {
  it('renders button correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders button text correctly', () => {
    const tree = renderer.create(<ButtonText>Snapshot test!</ButtonText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

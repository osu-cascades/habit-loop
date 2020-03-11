import 'react-native';
import React from 'react';
import { Container } from '../basic/container';
import renderer from 'react-test-renderer';

describe('Container snapshot', () => {
  it('renders container correctly', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

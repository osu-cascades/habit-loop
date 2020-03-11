import 'react-native';
import React from 'react';
import { FormLabel } from '../basic/form_label';
import renderer from 'react-test-renderer';

describe('FormLabel snapshot', () => {
  it('renders form label correctly', () => {
    const tree = renderer.create(<FormLabel>Snapshot test</FormLabel>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

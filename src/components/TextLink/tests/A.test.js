import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import A from '../A';

describe('<A />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <A />
    );

    expect(component.toJSON()).toMatchStyledComponentsSnapshot();
  });
});

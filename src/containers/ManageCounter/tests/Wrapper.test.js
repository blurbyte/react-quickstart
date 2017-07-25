import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <Wrapper />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

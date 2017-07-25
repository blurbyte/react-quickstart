import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LogoWrapper from '../LogoWrapper';

describe('<LogoWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <LogoWrapper />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

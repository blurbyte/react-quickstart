import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import MainHeadline from '../index';

describe('<MainHeadline />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <MainHeadline />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

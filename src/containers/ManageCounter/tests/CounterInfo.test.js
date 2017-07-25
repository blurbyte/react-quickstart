import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CounterInfo from '../CounterInfo';

describe('<CounterInfo />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <CounterInfo />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

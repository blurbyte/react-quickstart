import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CounterValue from '../CounterValue';

describe('<CounterValue />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<CounterValue>10</CounterValue>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

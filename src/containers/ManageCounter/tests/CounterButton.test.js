import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../CounterButton';

describe('<CounterButton />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <CounterButton />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import CounterPanel from '../CounterPanel';

// mocked components
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../CounterInfo', () => 'CounterInfo');
jest.mock('../Description', () => 'Description');
jest.mock('../CounterValue', () => 'CounterValue');
jest.mock('../CounterButton', () => 'CounterButton');

describe('<CounterPanel />', () => {
  it('should render correct button when counter is higher than lowerLimit', () => {
    // props init
    const props = {
      counter: 10,
      onIncrease: jest.fn(),
      onDecrease: jest.fn(),
      lowerLimit: 0
    };
    // component init
    const component = renderer.create(
      <CounterPanel {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render disabled button when counter is lower or equal lowerLimit', () => {
    // props init
    const props = {
      counter: 0,
      onIncrease: jest.fn(),
      onDecrease: jest.fn(),
      lowerLimit: 0
    };
    // component init
    const component = renderer.create(
      <CounterPanel {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

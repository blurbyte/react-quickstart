import React from 'react';
import renderer from 'react-test-renderer';

import { ManageCounter, mapDispatchToProps } from '../index';

// mocked components
jest.mock('../CounterPanel', () => 'CounterPanel');

const dispatch = jest.fn();
const actions = mapDispatchToProps(dispatch);

describe('<ManageCounter />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      counter: 10,
      onIncrease: jest.fn(),
      onDecrease: jest.fn(),
      increaseCounterByAmount: jest.fn(),
      decreaseCounterByAmount: jest.fn()
    };
    // component init
    const component = renderer.create(
      <ManageCounter {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should handle increaseCounterByAmount()', () => {
    //init
    const amount = 10;
    actions.increaseCounterByAmount(amount);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
  it('should handle increaseCounterByAmount()', () => {
    const amount = 0;
    const lowerLimit = 0;
    actions.decreaseCounterByAmount(amount, lowerLimit);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
});

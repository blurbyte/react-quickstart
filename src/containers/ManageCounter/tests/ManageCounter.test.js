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
      increaseCounterByAmount: jest.fn(),
      decreaseCounterByAmount: jest.fn()
    };
    // component init
    const component = renderer.create(
      <ManageCounter {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should dispatch increaseCounterByAmount()', () => {
    //init
    const amount = 10;
    actions.increaseCounterByAmount(amount);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
  it('should dispatch decreaseCounterByAmount()', () => {
    const amount = 0;
    const lowerLimit = 0;
    actions.decreaseCounterByAmount(amount, lowerLimit);

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
  it('should dispatch increaseCounterByAmount() once when handling onIncrease()', () => {
    // props init
    const props = {
      counter: 0,
      increaseCounterByAmount: jest.fn(),
      decreaseCounterByAmount: jest.fn()
    };
    // component init
    const component = renderer.create(
      <ManageCounter {...props} />
    );
    const instance = component.getInstance();
    instance.onIncrease();

    expect(props.increaseCounterByAmount.mock.calls.length).toEqual(1);
  });
  it('should dispatch decreaseCounterByAmount() once when handling onDecrease()', () => {
    // props init
    const props = {
      counter: 20,
      increaseCounterByAmount: jest.fn(),
      decreaseCounterByAmount: jest.fn()
    };
    // component init
    const component = renderer.create(
      <ManageCounter {...props} />
    );
    const instance = component.getInstance();
    instance.onDecrease();

    expect(props.decreaseCounterByAmount.mock.calls.length).toEqual(1);
  });
});

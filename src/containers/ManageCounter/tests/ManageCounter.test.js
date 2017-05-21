import React from 'react';
import renderer from 'react-test-renderer';

import { ManageCounter } from '../index';

// mocked components
jest.mock('../CounterPanel', () => 'CounterPanel');

describe('<ManageCounter />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      counter: 10,
      onIncrease: jest.fn(),
      onDecrease: jest.fn(),
      actions: {
        testAction: jest.fn()
      }
    };
    // component init
    const component = renderer.create(
      <ManageCounter {...props} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

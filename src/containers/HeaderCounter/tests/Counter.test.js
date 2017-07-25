import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../Counter';

// mocked components
jest.mock('components/NavLink', () => 'NavLink');
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../CounterValue', () => 'CounterValue');

describe('<Counter />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      counter: 10
    };

    // component init
    const component = renderer.create(<Counter {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

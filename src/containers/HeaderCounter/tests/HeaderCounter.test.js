import React from 'react';
import renderer from 'react-test-renderer';

import { HeaderCounter } from '../index';
jest.mock('../Counter', () => 'Counter');

describe('<HeaderCounter />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      counter: 10,
      actions: {
        testAction: jest.fn()
      }
    };

    // component init
    const component = renderer.create(<HeaderCounter {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import CounterInfo from '../CounterInfo';

describe('<CounterInfo />', () => {
  it('should render div', () => {
    const component = shallow(<CounterInfo />);
    expect(component.type()).toEqual('div');
  });
  it('should have a className attribute', () => {
    const component = shallow(<CounterInfo />);
    expect(component.prop('className')).toBeDefined();
  });
});

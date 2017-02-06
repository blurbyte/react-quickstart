import React from 'react';
import { shallow } from 'enzyme';

import CounterValue from '../CounterValue';

describe('<CounterValue />', () => {
  it('should render parahgraph>', () => {
    const component = shallow(<CounterValue />);
    expect(component.type()).toEqual('p');
  });
  it('should have a className attribute', () => {
    const component = shallow(<CounterValue />);
    expect(component.prop('className')).toBeDefined();
  });
  it('should render given value', () => {
    const children = 6;
    const component = shallow(<CounterValue>{children}</CounterValue>);
    expect(component.contains(children)).toBeTruthy();
  });
});

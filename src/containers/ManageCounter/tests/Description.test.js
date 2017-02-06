import React from 'react';
import { shallow } from 'enzyme';

import Description from '../Description';

describe('<Description />', () => {
  it('should render parahgraph>', () => {
    const component = shallow(<Description />);
    expect(component.type()).toEqual('p');
  });
  it('should have a className attribute', () => {
    const component = shallow(<Description />);
    expect(component.prop('className')).toBeDefined();
  });
  it('should render given text', () => {
    const children = 'Test';
    const component = shallow(<Description>{children}</Description>);
    expect(component.contains(children)).toBeTruthy();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render div', () => {
    const component = shallow(<Wrapper />);
    expect(component.type()).toEqual('div');
  });
  it('should have a className attribute', () => {
    const component = shallow(<Wrapper />);
    expect(component.prop('className')).toBeDefined();
  });
});

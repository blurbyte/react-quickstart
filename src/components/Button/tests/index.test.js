// example <Button /> component test
import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should render a <button>', () => {
    const component = shallow(<Button />);
    expect(component.type()).toEqual('button');
  });
  it('should have a className attribute', () => {
    const component = shallow(<Button />);
    expect(component.prop('className')).toBeDefined();
  });
});

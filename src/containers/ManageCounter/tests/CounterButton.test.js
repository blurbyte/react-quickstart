import React from 'react';
import { mount } from 'enzyme';

import CounterButton from '../CounterButton';

const children = <span>Test</span>;
const disabled = true;
const renderComponent = (props = {}) => mount(
  <CounterButton {...props}>{children}</CounterButton>
);

describe('<CounterButton />', () => {
  it('should render a <button>', () => {
    const component = renderComponent();
    expect(component.find('button').length).toEqual(1);
  });
  it('should have a className attribute', () => {
    const component = renderComponent();
    expect(component.find('button').prop('className')).toBeDefined();
  });
  it('should have children', () => {
    const component = renderComponent();
    expect(component.contains(children)).toEqual(true);
  });
  it('should handle click event', () => {
    const onClickSpy = jest.fn();
    const component = renderComponent({ onClick: onClickSpy });
    component.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should have disabled state', () => {
    const component = renderComponent({ disabled });
    expect(component.find('button').prop('disabled')).toBeDefined();
  });
});

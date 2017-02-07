import React from 'react';
import { shallow } from 'enzyme';

import CounterPanel from '../CounterPanel';
import Description from '../Description';
import CounterValue from '../CounterValue';
import CounterButton from '../CounterButton';

const renderComponent = (props = { counter: 0, counterStep: 2, lowerLimit: 0 }) => shallow(
  <CounterPanel {...props} />
);

describe('<CounterPanel />', () => {
  it('should render description', () => {
    const component = renderComponent();
    expect(component.find(Description).length).toEqual(1);
  });
  it('should display current counter value', () => {
    const component = renderComponent({ counter: 22, counterStep: 2, lowerLimit: 0 });
    // console.log(component.debug()); // allows to view shallow rendered component
    expect(component.find(CounterValue).prop('children')).toEqual(22);
  });
  it('should render two buttons', () => {
    const component = renderComponent();
    expect(component.find(CounterButton).length).toEqual(2);
  });
  it('should render increase value button', () => {
    const children = ['Increase Value By ', 2];
    const component = renderComponent();
    expect(component.find(CounterButton).filter({ children }).length).toEqual(1);
  });
  it('should render decrease value button', () => {
    const children = ['Decrease Value By ', 2];
    const component = renderComponent();
    expect(component.find(CounterButton).filter({ children }).length).toEqual(1);
  });
  it('decrease value button should be disabled if counter reaches lower limit', () => {
    const children = ['Decrease Value By ', 2];
    const component = renderComponent({ counter: -4, counterStep: 2, lowerLimit: -4 });
    expect(component.find(CounterButton).filter({ children }).prop('disabled')).toEqual(true);
  });
});

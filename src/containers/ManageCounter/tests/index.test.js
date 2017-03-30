import React from 'react';
import { mount } from 'enzyme';

import ManageCounter from '../index';
import CounterPanel from '../CounterPanel';


import { Provider } from 'react-redux';
import configureStore from '../../../store';

describe('<ManageCounter />', () => {
  it('should contain <CounterPanel />', () => {
    const store = configureStore({});
    const actions = {
      increaseCounter: () => { },
      decreaseCounter: () => { }
    };
    const counter = 0;

    const component = mount(
      <Provider store={store}>
        <ManageCounter counter={counter} actions={actions} />
      </Provider>
    );

    expect(component.find(CounterPanel).length).toEqual(1);
  });
});

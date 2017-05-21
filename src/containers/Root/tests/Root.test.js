import React from 'react';
import renderer from 'react-test-renderer';
import createHistory from 'history/createMemoryHistory';
import { createStore } from 'redux';
import rootReducer from 'reducers';

import Root from '../index';

// mocked components
jest.mock('containers/App', () => 'App');

describe('<Root />', () => {
  it('should render correctly', () => {
    // mocked store and history
    const history = createHistory();
    const store = createStore(rootReducer);

    // component init
    const component = renderer.create(
      <Root store={store} history={history} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

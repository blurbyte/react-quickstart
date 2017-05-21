import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

// mocked components
jest.mock('react-helmet', () => 'Helmet');
jest.mock('react-router-dom/Route', () => 'Route');
jest.mock('react-router-dom/Switch', () => 'Switch');
jest.mock('../AppWrapper', () => 'AppWrapper');
jest.mock('components/Header', () => 'Header');

describe('<App />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <App />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

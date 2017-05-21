import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from '../index';

// mocked components
jest.mock('react-helmet', () => 'Helmet');
jest.mock('components/ContentWrapper', () => 'ContentWrapper');
jest.mock('components/MainHeadline', () => 'MainHeadline');
jest.mock('components/NavLink', () => 'NavLink');

describe('<NotFoundPage />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <NotFoundPage />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

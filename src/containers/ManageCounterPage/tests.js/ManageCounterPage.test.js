import React from 'react';
import renderer from 'react-test-renderer';

import ManageCounterPage from '../index';

// mocked components
jest.mock('react-helmet', () => 'Helmet');
jest.mock('components/ContentWrapper', () => 'ContentWrapper');
jest.mock('components/MainHeadline', () => 'MainHeadline');
jest.mock('components/MainParagraph', () => 'MainParagraph');
jest.mock('../HomeLink', () => 'HomeLink');
jest.mock('containers/ManageCounter', () => 'ManageCounter');

describe('<ManageCounterPage />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<ManageCounterPage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

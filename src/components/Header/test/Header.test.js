import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

//mocked components
jest.mock('../Banner', () => 'Banner');
jest.mock('../LogoWrapper', () => 'LogoWrapper');
jest.mock('../HomeLink', () => 'HomeLink');
jest.mock('../ProjectTitle', () => 'ProjectTitle');
jest.mock('components/Icons/Logo', () => 'Logo');
jest.mock('containers/HeaderCounter', () => 'HeaderCounter');

describe('<Header />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <Header />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

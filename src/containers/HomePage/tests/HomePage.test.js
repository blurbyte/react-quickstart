import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../index';

// mocked components
jest.mock('react-helmet', () => 'Helmet');

// components
jest.mock('components/ContentWrapper', () => 'ContentWrapper');
jest.mock('components/MainHeadline', () => 'MainHeadline');
jest.mock('components/SecondaryHeadline', () => 'SecondaryHeadline');
jest.mock('components/MainParagraph', () => 'MainParagraph');
jest.mock('components/TextLink', () => 'TextLink');
jest.mock('../LayoutWrapper', () => 'LayoutWrapper');
jest.mock('../LayoutMainColumn', () => 'LayoutMainColumn');
jest.mock('../LayoutSecondaryColumn', () => 'LayoutSecondaryColumn');
jest.mock('../Section', () => 'Section');
jest.mock('../LinksList', () => 'LinksList');

describe('<HomePage />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <HomePage />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('shouldComponentUpdate() should return false', () => {
    // component init
    const component = renderer.create(
      <HomePage />
    );
    const instance = component.getInstance();

    expect(instance.shouldComponentUpdate()).toEqual(false);
  });
});

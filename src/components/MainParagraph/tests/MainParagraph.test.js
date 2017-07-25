import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import MainParagraph from '../index';

describe('<MainParagraph />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <MainParagraph />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

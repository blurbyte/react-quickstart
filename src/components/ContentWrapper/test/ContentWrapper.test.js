import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ContentWrapper from '../index';

describe('<ContentWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <ContentWrapper />
    );

    expect(component.toJSON()).toMatchStyledComponentsSnapshot();
  });
});

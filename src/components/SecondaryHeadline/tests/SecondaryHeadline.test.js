import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SecondaryHeadline from '../index';

describe('<SecondaryHeadline />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <SecondaryHeadline />
    );

    expect(component.toJSON()).toMatchStyledComponentsSnapshot();
  });
});

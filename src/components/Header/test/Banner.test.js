import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Banner from '../Banner';

describe('<Banner />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <Banner />
    );

    expect(component.toJSON()).toMatchStyledComponentsSnapshot();
  });
});

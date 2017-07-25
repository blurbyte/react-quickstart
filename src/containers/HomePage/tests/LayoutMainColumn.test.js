import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LayoutMainColumn from '../LayoutMainColumn';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <LayoutMainColumn />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

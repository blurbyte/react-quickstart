import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import AppWrapper from '../AppWrapper';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <AppWrapper />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

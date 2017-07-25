import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LinksList from '../LinksList';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <LinksList />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

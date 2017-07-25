import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../index';

describe('<Button />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <Button />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

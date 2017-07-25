import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TextLink from '../index';

describe('<TextLink />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      href: 'https://google.com'
    };

    // component init
    const component = renderer.create(
      <TextLink {...props}>Google.com</TextLink>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

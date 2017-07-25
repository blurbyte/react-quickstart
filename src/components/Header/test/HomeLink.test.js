import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';

import HomeLink from '../HomeLink';

describe('<HomeLink />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      to: '/home'
    };
    // component init
    const component = renderer.create(
      <MemoryRouter>
        <HomeLink {...props} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

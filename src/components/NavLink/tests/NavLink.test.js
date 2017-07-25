import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';

import NavLink from '../index';

describe('<NavLink />', () => {
  it('should render correctly', () => {
    // props init
    const props = {
      to: '/counter'
    };
    // component init
    const component = renderer.create(
      <MemoryRouter>
        <NavLink {...props} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

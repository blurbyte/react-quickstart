import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ProjectTitle from '../ProjectTitle';

describe('<ProjectTitle />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(
      <ProjectTitle />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

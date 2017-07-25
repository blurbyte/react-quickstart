import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Description from '../Description';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<Description />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

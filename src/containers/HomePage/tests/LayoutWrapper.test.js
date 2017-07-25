import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LayoutWrapper from '../LayoutWrapper';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<LayoutWrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

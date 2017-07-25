import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LayoutSecondaryColumn from '../LayoutSecondaryColumn';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<LayoutSecondaryColumn />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

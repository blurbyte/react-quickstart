import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Section from '../Section';

describe('<AppWrapper />', () => {
  it('should render correctly', () => {
    // component init
    const component = renderer.create(<Section />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import PropTypes from 'prop-types';
import A from './A';

const TextLink = (props) => (
  <A href={props.href} target="_blank">
    {props.children}
  </A>
);

TextLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default TextLink;

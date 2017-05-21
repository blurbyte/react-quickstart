import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Button from 'components/Button';

const StyledButton = styled(Button)`
  margin-right: 1.4rem;

  &:last-child {
    margin-right: 0;
  }
`;

const CounterButton = ({ disabled, children, onClick }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

CounterButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default CounterButton;

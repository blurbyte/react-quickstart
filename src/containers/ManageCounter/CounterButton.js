import React, { PropTypes } from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-right: 1.4rem;

  &:last-child {
    margin-right: 0;
  }
`;

const CounterButton = ({disabled, children, onClick}) => (
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

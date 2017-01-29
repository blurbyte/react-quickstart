//presentational component
import React, {PropTypes} from 'react';

//components
import NavLink from '../../components/NavLink';
import Wrapper from './Wrapper';
import CounterValue from './CounterValue';

const Counter = ({counter}) => (
  <Wrapper>
    <NavLink to="/counter">Manage example counter</NavLink>
    <CounterValue>{counter}</CounterValue>
  </Wrapper>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default Counter;

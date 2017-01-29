//Presentational (dumb) component

//declared as stateles function
//no need for this keyword, prevents from using react lifecycle methods
//example of ES2015 default parameter and template strings
//doesn't have to alwas receive props: const PresentationalComponent = () => (...);

import React, { PropTypes } from 'react';

//components
import Wrapper from './Wrapper';
import CounterInfo from './CounterInfo';
import Description from './Description';
import CounterValue from './CounterValue';
import CounterButton from './CounterButton';

const CounterPanel = ({counter, counterStep, onIncrease, onDecrease, lowerLimit}) => (
  // disable CounterButton if counter value is lower than limit
  <Wrapper>
    <CounterInfo>
      <Description>Current Counter Value</Description><CounterValue>{counter}</CounterValue>
    </CounterInfo>
    <CounterButton onClick={onIncrease}>Increase Value By {counterStep}</CounterButton>
    {
      counter > lowerLimit ?
      <CounterButton onClick={onDecrease}>Decrease Value By {counterStep}</CounterButton> :
      <CounterButton disabled>Decrease Value By {counterStep}</CounterButton>
    }
  </Wrapper>
);

//list of react PropTypes: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
//you can pass strings, numbers, objects, arrays, etc.
CounterPanel.propTypes = {
  counter: PropTypes.number.isRequired,
  counterStep: PropTypes.number.isRequired,
  lowerLimit: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default CounterPanel;
//Presentational (dumb) component

//declared as stateles function
//no need for this keyword, prevents from using react lifecycle methods
//example of ES2015 default parameter and template strings
//doesn't have to alwas receive props: const PresentationalComponent = () => (...);

import React from 'react';
import PropTypes from 'prop-types';

//components
import Wrapper from './Wrapper';
import CounterInfo from './CounterInfo';
import Description from './Description';
import CounterValue from './CounterValue';
import CounterButton from './CounterButton';

const CounterPanel = ({ counter, onIncrease, onDecrease, lowerLimit }) => (
  // disable CounterButton if counter value is lower than limit
  <Wrapper>
    <CounterInfo>
      <Description>Current Counter Value</Description><CounterValue>{counter}</CounterValue>
    </CounterInfo>
    <CounterButton onClick={onIncrease}>Increase Value</CounterButton>
    {
      counter > lowerLimit ?
        <CounterButton onClick={onDecrease}>Decrease Value </CounterButton> :
        <CounterButton disabled>Decrease Value</CounterButton>
    }
  </Wrapper>
);

//list of react PropTypes: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
//you can pass strings, numbers, objects, arrays, etc.
CounterPanel.propTypes = {
  counter: PropTypes.number.isRequired,
  lowerLimit: PropTypes.number.isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
};

export default CounterPanel;

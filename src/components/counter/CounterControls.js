//Presentational (dumb) component

//declared as stateles function
//no need for this keyword, prevents from using react lifecycle methods
//example of ES2015 default parameter and template strings
//doesn't have to alwas receive props: const PresentationalComponent = () => (...);

import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';

const CounterControls = ({counter, counterStep, onIncrease, onDecrease}) => (
  <section>
    <h1>Welcome to Counter Page!</h1>
    <p>{counter}</p>
    <button onClick={onIncrease}>{`Increase counter by ${counterStep}`}</button>
    <button onClick={onDecrease}>{`Decrease counter by ${counterStep}`}</button>
    <IndexLink to="/">Take me back to Main Page</IndexLink>
  </section>
);

//list of react PropTypes: https://facebook.github.io/react/docs/reusable-components.html
//you can pass strings, numbers, objects, arrays, etc.
CounterControls.propTypes = {
  counter: PropTypes.number.isRequired,
  counterStep: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default CounterControls;

//presentational component
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const styles = require('./HeaderCounter.css');

const HeaderCounter = ({counter}) => (
  <div className={styles.wrapper}>
    <Link className={styles.link} to="/counter">Manage example counter</Link>
    <span className={styles.counter}>{counter}</span>
  </div>
);

HeaderCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default HeaderCounter;

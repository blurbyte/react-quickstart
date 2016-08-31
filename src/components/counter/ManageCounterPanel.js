import React, {PropTypes} from 'react';

//css modules styles, using CommonJS syntax to bypass eslint errors
const styles = require('./ManageCounterPanel.css');

const ManageCounterPanel = ({counter, counterStep, lowerLimit, onIncrease, onDecrease}) => (
  <div className={styles.wrapper}>
    <div className={styles['counter-info']}>
      <p className={styles.description}>Current Counter Value</p><p className={styles['counter-value']}>{counter}</p>
    </div>
    <button className={styles.button} onClick={onIncrease}>Increase Value By {counterStep}</button>
    <button className={counter === lowerLimit ? styles['button-disabled'] : styles.button} onClick={onDecrease}>Decrease Value By {counterStep}</button>
  </div>
);

ManageCounterPanel.propTypes = {
  counter: PropTypes.number.isRequired,
  counterStep: PropTypes.number.isRequired,
  lowerLimit: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default ManageCounterPanel;

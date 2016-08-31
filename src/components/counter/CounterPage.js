import React from 'react';
import {IndexLink} from 'react-router';

//components
import ManageCounterContainer from './ManageCounterContainer';

const styles = require('./CounterPage.css');

const CounterPage = () => (
  <section className={styles.content}>
    <h1 className={styles['main-header']}>Manage Counter</h1>
    <p className={styles['content-description']}>It's simple Redux counter example. Current counter value is held in Redux Store. Counter shown in header and on this page below are connected to Redux Store &mdash; value got updated instantly in both places. It also persists even if you move between pages.</p>
    <ManageCounterContainer />
    <IndexLink className={styles.link} to="/">Go back to main page</IndexLink>
  </section>
);

export default CounterPage;

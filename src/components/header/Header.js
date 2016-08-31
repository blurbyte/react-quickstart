import React from 'react';
import {IndexLink} from 'react-router';

//components
import HeaderCounterContainer from './HeaderCounterContainer';

//import logo
import {BlurbyteLogo} from '../common/Icons';

//css modules styles, using CommonJS syntax to bypass eslint errors
const styles = require('./Header.css');

const Header = () => (
  <header className={styles.banner} role="banner">
    <div className={styles.logo}>
      <IndexLink className={styles.link} to="/"><BlurbyteLogo /></IndexLink>
      <p className={styles.description}>React Quickstart</p>
    </div>
    <HeaderCounterContainer />
  </header>
);

export default Header;

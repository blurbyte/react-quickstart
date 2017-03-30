import React from 'react';
import Helmet from 'react-helmet';
// Switch is required for NotFoundPage
import { Route, Switch } from 'react-router-dom';

//import containers for router
import HomePage from '../HomePage';
import ManageCounterPage from '../ManageCounterPage';
import NotFoundPage from '../NotFoundPage';

//components
import AppWrapper from './AppWrapper';
import Header from '../../components/Header';

//top component has to be class in order for hot module replacement to work
class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s | React Quickstart" defaultTitle="React Quickstart" meta={[{ name: 'description', content: 'React starter kit for single page web applications development.' }]} />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/counter" component={ManageCounterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;

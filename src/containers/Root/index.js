// such root component is required react-hot-loader to work properly
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

// router
import { ConnectedRouter } from 'react-router-redux';

// main app container and ScrollToTop helper
import App from '../App';
import ScrollToTop from '../../components/ScrollToTop';

export default class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

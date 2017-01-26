import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

//components
import Header from './header/Header';

//top component has to be class in order for hot module replacement to work
class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | React Quickstart" defaultTitle="React Quickstart" meta={[{ name: 'description', content: 'React starter kit for single page web applications development.' }]} />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

//App component decorated to enable react-css-modules
export default App;

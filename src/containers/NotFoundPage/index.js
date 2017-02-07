import React from 'react';
import MainHeadline from '../../components/MainHeadline';
import NavLink from '../../components/NavLink';

class NotFoundPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <MainHeadline>404 Not Found</MainHeadline>
        <NavLink to="/">Take me back to Main Page</NavLink>
      </section>
    );
  }
}

export default NotFoundPage;

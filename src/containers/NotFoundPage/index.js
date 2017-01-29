import React from 'react';
import NavLink from '../../components/NavLink';

class NotFoundPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <h1>404 Not Found</h1>
        <NavLink to="/">Take me back to Main Page</NavLink>
      </section>
    );
  }
}

export default NotFoundPage;

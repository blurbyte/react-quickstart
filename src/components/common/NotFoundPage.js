import React from 'react';
import {IndexLink} from 'react-router';

const NotFoundPage = () => (
  <section>
    <h1>404 Not Found</h1>
    <IndexLink to="/">Take me back to Main Page</IndexLink>
  </section>
);

export default NotFoundPage;

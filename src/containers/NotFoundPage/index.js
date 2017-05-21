import React from 'react';
import Helmet from 'react-helmet';

// components
import ContentWrapper from 'components/ContentWrapper';
import MainHeadline from 'components/MainHeadline';
import NavLink from 'components/NavLink';

class NotFoundPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <MainHeadline>404 Not Found</MainHeadline>
        <NavLink to="/">Take me back to Main Page</NavLink>
      </ContentWrapper>
    );
  }
}

export default NotFoundPage;

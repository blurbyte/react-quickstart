import React from 'react';
import Helmet from 'react-helmet';

//components
import ContentWrapper from '../../components/ContentWrapper';
import MainHeadline from '../../components/MainHeadline';
import MainParagraph from '../../components/MainParagraph';
import HomeLink from './HomeLink';

import ManageCounter from '../ManageCounter';

const ManageCounterPage = () => (
  <ContentWrapper>
    <Helmet title="Manage Counter" />
    <MainHeadline>Manage Counter</MainHeadline>
    <MainParagraph>It's simple Redux counter example. Current counter value is held in Redux Store. Counter shown in header and on this page below are connected to Redux Store &mdash; value got updated instantly in both places. It also persists even if you move between pages.</MainParagraph>
    <ManageCounter />
    <HomeLink to="/">Go back to main page</HomeLink>
  </ContentWrapper>
);

export default ManageCounterPage;

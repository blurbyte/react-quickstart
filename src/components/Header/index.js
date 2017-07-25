import React from 'react';

// components
import Banner from './Banner';
import LogoWrapper from './LogoWrapper';
import HomeLink from './HomeLink';
import ProjectTitle from './ProjectTitle';
import Logo from 'components/Icons/Logo';

// container
import HeaderCounter from 'containers/HeaderCounter';

const Header = () =>
  <Banner>
    <LogoWrapper>
      <HomeLink to="/">
        <Logo />
      </HomeLink>
      <ProjectTitle>React Quickstart</ProjectTitle>
    </LogoWrapper>
    <HeaderCounter />
  </Banner>;

export default Header;

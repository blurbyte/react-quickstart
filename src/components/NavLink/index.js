import { Link } from 'react-router';
import styled from 'styled-components';

const NavLink = styled(Link)`
  font-family: 'OpenSans Light', Arial, Helvetica, sans-serif;
  color: #ff4326;
  font-size: 1.4rem;
  text-transform: uppercase;
  display: block;
  margin-right: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default NavLink;

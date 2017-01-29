import styled from 'styled-components';
import media from '../../styles/media';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet`display: block;`}
`;

export default LayoutWrapper;

import styled from 'styled-components';
import media from '../../styles/media';

const LayoutMainColumn = styled.div`
  width: 66%;
  ${media.desktop`width: 46%;`} ${media.tablet`width: 100%;`};
`;

export default LayoutMainColumn;

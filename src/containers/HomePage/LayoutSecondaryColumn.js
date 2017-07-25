import styled from 'styled-components';
import media from '../../styles/media';

const LayoutSecondaryColumn = styled.div`
  width: 30%;
  ${media.desktop`width: 46%;`} ${media.tablet`width: 100%;`};
`;

export default LayoutSecondaryColumn;

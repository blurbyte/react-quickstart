import styled from 'styled-components';

const TextLink = styled.a.attrs({
  target: '_blank'
})`
  color: #ff4326;

  &:hover {
    text-decoration: underline;
  }
`;

export default TextLink;

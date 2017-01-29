import styled from 'styled-components';

const Button = styled.button`
  background: rgba(40,40,40,0.05);
  border: none;
  font-family: 'OpenSans Bold', Arial, Helvetica, sans-serif;
  color: #ff4326;
  font-size: 1.4rem;
  text-transform: uppercase;
  line-height: 3.4rem;
  padding: 0 2rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(40,40,40,0.1);
  }

  &:active {
    background: rgba(255,67,38,0.3);
  }

  &:disabled {
    color: rgba(40,40,40, 0.3);
    background: rgba(40,40,40,0.05);
    cursor: default;
  }
`;

export default Button;

import Button from 'components/Button';

const CounterButton = Button.extend`
  margin-right: 1.4rem;

  &:last-child {
    margin-right: 0;
  }
`;

export default CounterButton;

import * as actions from '../counterActions';
import * as types from '../actionTypes';

//synchronous actions BDD tests
describe('Counter actions', () => {
  describe('incrementCounterByAmount', () => {
    it('should create INCREMENT_COUNTER_BY_AMOUNT action', () => {
      //arrange
      const amount = 2;
      const expectedAction = {
        type: types.INCREASE_COUNTER_BY_AMOUNT,
        amount
      };

      //act
      const action = actions.increaseCounterByAmount(amount);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
  describe('decrementCounter', () => {
    it('should create DECREASE_COUNTER_BY_AMOUNT action', () => {
      //arrange
      const amount = 3;
      const lowerLimit = 0;
      const expectedAction = {
        type: types.DECREASE_COUNTER_BY_AMOUNT,
        amount,
        lowerLimit
      };

      //act
      const action = actions.decreaseCounterByAmount(amount, lowerLimit);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

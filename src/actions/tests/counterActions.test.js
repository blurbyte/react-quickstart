import * as actions from '../counterActions';
import * as types from '../actionTypes';

//synchronous actions BDD tests
describe('Counter actions', () => {
  describe('incrementCounter', () => {
    it('should create INCREMENT_COUNTER action', () => {
      //arrange
      const amount = 2;
      const expectedAction = {
        type: types.INCREASE_COUNTER,
        amount
      };

      //act
      const action = actions.increaseCounter(amount);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
  describe('decrementCounter', () => {
    it('should create DECREASE_COUNTER action', () => {
      //arrange
      const amount = 3;
      const expectedAction = {
        type: types.DECREASE_COUNTER,
        amount
      };

      //act
      const action = actions.decreaseCounter(amount);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

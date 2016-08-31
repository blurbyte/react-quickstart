import {expect} from 'chai';
import * as actions from '../actions/counterActions';
import counterReducer from './counterReducer';

//reducer integration test
describe('Counter reducer', () => {
  it('should return incremented value', () => {
    //arrange
    const stateBefore = 10;
    const stateAfter = 13;

    //act
    const action = actions.increaseCounter(3);

    Object.freeze(stateBefore);
    Object.freeze(action);

    //assert
    expect(counterReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
  it('should return decremented value', () => {
    //arrange
    const stateBefore = 10;
    const stateAfter = 7;

    //act
    const action = actions.decreaseCounter(3);

    Object.freeze(stateBefore);
    Object.freeze(action);

    //assert
    expect(counterReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
});

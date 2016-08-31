//test to check if mocha and chai are setup properly
//mocha requires at least one test file, otherwise it throws an error
import {expect} from 'chai';

describe('Sample environment test', () => {
  it('should always be true', () => {
    expect(1).to.not.equal(0);
  });
});

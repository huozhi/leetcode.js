import {expect} from 'chai'
import {twoSum} from '../src/two-sum'

describe('two sum', () => {
  it('1', () => {
    expect(twoSum([0, 4, 3, 0], 0)).to.eql([0, 3])
  })
  it('2', () => {
    expect(twoSum([3, 2, 4], 6)).to.eql([1, 2])
  })
  it('3', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).to.eql([2, 4])
  })
})

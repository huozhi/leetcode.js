import {expect} from 'chai'
import {addDigits, addDigits_} from '../src/add-digits'

describe('add digits', () => {
  it('1', () => {
    expect(addDigits(38)).to.equal(2)
    expect(addDigits_(38)).to.equal(2)
  })
})

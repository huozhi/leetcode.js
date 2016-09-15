const {expect} = require('chai')
const {addDigits, addDigits_2} = require('../src/add-digits')

describe('add digits', () => {
  it('1', () => {
    expect(addDigits(38)).to.equal(2)
  })

  it('2', () => {
    expect(addDigits_2(38)).to.equal(2)
  })
})

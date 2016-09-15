const {expect} = require('chai')
const {addDigits, addDigits2} = require('../src/add-digits')

describe('add digits', () => {
  it('1', () => {
    expect(addDigits(38)).to.equal(2)
  })

  it('2', () => {
    expect(addDigits2(38)).to.equal(2)
  })
})

'use strict'

const expect = require('chai').expect
const solution = require('../src/add-digits')
const addDigits = solution.addDigits
const addDigits_ = solution.addDigits_


describe('add digits', () => {
  it('1', () => {
    expect(addDigits(38)).to.equal(2)
    expect(addDigits_(38)).to.equal(2)
  })
})

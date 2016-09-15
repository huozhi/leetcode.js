'use strict'

const expect = require('chai').expect
const merge = require('../src/merge-sorted-array').merge


describe('merge sorted array', () => {
  it('1', () => {
    let nums1 = [1], m = 1, nums2 = [], n = 0
    merge(nums1, m, nums2, n)
    expect(nums1).eql([1])
  })
})

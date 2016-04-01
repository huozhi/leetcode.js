import {expect} from 'chai'
import {merge} from '../src/merge-sorted-array'


describe('merge sorted array', () => {
  it('1', () => {
    let nums1 = [1], m = 1, nums2 = [], n = 0
    merge(nums1, m, nums2, n)
    expect(nums1).eql([1])
  })
})

const {expect} = require('chai')
const {lengthLongestPath} = require('../src/longest-absolute-file-path')

describe('longest-absolute-file-path', () => {
  it('1', () => {
    const input = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
    expect(lengthLongestPath(input), 32)
  })
})

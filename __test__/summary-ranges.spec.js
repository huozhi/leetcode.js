const summaryRanges = require('../src/summary-ranges')

describe('summary ranges', () => {
  it('1', () => {
    expect(summaryRanges([0,1])).toEqual(['0->1'])
  })

  it('2', () => {
    expect(summaryRanges([0,1,3,5,6])).toEqual(['0->1', '3', '5->6'])
  })

  it('3', () => {
    expect(summaryRanges([0,1,2,4,5,7])).toEqual(['0->2', '4->5', '7'])
  })
})

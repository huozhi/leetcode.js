const expect = require('chai').expect
const fullJustify = require('../src/text-justification').fullJustify

describe('text justification', () => {
  it('1', () => {
    const text = ["My","momma","always","said,","\"Life","was","like","a","box","of","chocolates.","You","never","know","what","you're","gonna","get."]
    const L = 20
    const justified = [
      'My    momma   always',
      'said, "Life was like',
      'a box of chocolates.',
      'You  never know what',
      'you\'re gonna get.   '
    ]
    expect(fullJustify(text, L)).eql(justified)
  })

  it('2', () => {
    const text = ["Here","is","an","example","of","text","justification."]
    const L = 16
    const justified = [ 'Here    is    an', 'example  of text', 'justification.  ' ]
    expect(fullJustify(text, L)).eql(justified)
  })

  it('3', () => {
    const text = ["What","must","be","shall","be."]
    const L = 12
    const justified = [ 'What must be', 'shall be.   ' ]
    expect(fullJustify(text, L)).eql(justified)
  })
})

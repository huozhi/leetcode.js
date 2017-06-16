const findDuplicate = require('../src/find-duplicate-file-in-system')

describe('find-duplicate-file-in-system', () => {
  it('1', () => {
    const paths = findDuplicate([
      'root/a 1.txt(abcd) 2.txt(efsfgh)',
      'root/c 3.txt(abdfcd)',
      'root/c/d 4.txt(efggdfh)'
    ])
    expect(paths).toEqual([])
  })

  it('2', () => {
    const paths = findDuplicate([
      'root/a 1.txt(abcd) 2.txt(efgh)',
      'root/c 3.txt(abcd)',
      'root/c/d 4.txt(efgh)',
      'root 4.txt(efgh)'
    ])
    expect(paths.sort()).toEqual([
      ['root/a/2.txt','root/c/d/4.txt','root/4.txt'],
      ['root/a/1.txt','root/c/3.txt']
    ].sort())
  })
})

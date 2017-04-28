/**
 * @param  {number[]} nums1
 * @param  {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const len1 = nums1.length, len2 = nums2.length
  const sortFunc = (a, b) => a - b
  let i = 0, j = 0
  nums1.sort(sortFunc)
  nums2.sort(sortFunc)

  const ans = []
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      i++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      ans.push(nums1[i])
      i++
      j++
    }
  }
  return ans
}

module.exports = intersect

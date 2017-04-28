/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1)
  return Array.from(new Set(nums2.filter(x => s1.has(x))))
}

module.exports = intersection

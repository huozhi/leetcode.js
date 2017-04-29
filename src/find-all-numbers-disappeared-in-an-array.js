const findDisappearedNumbers = function(nums) {
  const disppares = []
  let i = 0
  while (i < nums.length) {
    if (nums[i] > 0 && (nums[i] !== i + 1) && (i !== nums[i] - 1)) {
      if (nums[i] === nums[nums[i] - 1]) {
        nums[i] = -1
        i++
      }
      let tmp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = tmp
    } else {
      i++
    }
  }
  nums.forEach((val, i) => { if (val === -1) disppares.push(i + 1) })
  return disppares
};

module.exports = findDisappearedNumbers
